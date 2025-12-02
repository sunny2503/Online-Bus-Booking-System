const express = require('express');
const BusService = require('../models/BusService');
const Booking = require('../models/Booking');
const BusOwner = require('../models/BusOwner');
const fetchuser = require('../middleware/middleware');

const router = express.Router();


router.get('/allservices', async (req, res) => {
  try {
    const busService = await BusService.find();
    res.json(busService);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.get('/owner-service', fetchuser, async (req, res) => {
  try {
    const { id } = req.user;
    const busService = await BusService.find({ owner: id });
    res.json(busService);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.post('/new-service', fetchuser, async (req, res) => {
  try {
    const { id } = req.user;
    const { title, location, boarding, destination, price, totalSeats, time } = req.body;

    const busOwner = await BusOwner.findById(id);

    if (!busOwner) {
      return res.status(404).send("Bus Owner not found");
    }

    const busService = new BusService({
      title, location, boarding, destination, price, totalSeats, time, owner: id
    });

    await busService.save();

    res.json(busService);

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.get('/get-booked-seats/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const busService = await BusService.findById(id);
    res.json(busService.bookedSeats);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.post('/book-seats/:id', fetchuser, async (req, res) => {
  try {
    const { id } = req.params;
    const { seats, departureDate } = req.body;

    const busService = await BusService.findById(id);

    if (!busService) {
      return res.status(404).send("Bus Service not found");
    }

    if (seats.some((seat) => busService.bookedSeats.includes(seat))) {
      return res.status(400).send("Seat already booked");
    }

    busService.bookedSeats.push(...seats);
    await busService.save();

    const booking = new Booking({
      bus: id,
      user: req.user.id,
      seats,
      departureDate
    });

    await booking.save();

    res.json(busService.bookedSeats);

  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

router.post('/cancel-booking/:id', fetchuser, async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findById(id);

    if (!booking) {
      return res.status(404).send("Booking not found");
    }

    if (booking.user.toString() !== req.user.id) {
      return res.status(401).send("Not authorized");
    }

    const busService = await BusService.findById(booking.bus);

    if (!busService) {
      return res.status(404).send("Bus Service not found");
    }

    busService.bookedSeats = busService.bookedSeats.filter(seat => !booking.seats.includes(seat));
    await busService.save();

    await booking.deleteOne();

    res.json(busService.bookedSeats);

  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get('/my-bookings', fetchuser, async (req, res) => {
  try {
    const { id } = req.user;
    const bookings = await Booking.find({ user: id }).populate('bus');
    res.json(bookings);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.get('/service-booking', fetchuser, async (req, res) => {
  try {
    const { id } = req.user;

    const busService = await BusService.find({ owner: id });

    const bookings = await Booking.find({ bus: { $in: busService.map(service => service._id) } }).populate([
      { path: 'bus' },
      { path: 'user' }
    ]);

    res.json(bookings);

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.get('/:id', fetchuser, async (req, res) => {
  try {
    const { id } = req.params;
    const busService = await BusService.findById(id).populate('owner', 'fullname');
    res.json(busService);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});


module.exports = router;