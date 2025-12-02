const express = require('express');
const User = require('../models/User');
const BusOwner = require('../models/BusOwner');
const jwt = require('jsonwebtoken');
const router = express.Router();
const bcrypt = require('bcryptjs');
const fetchuser = require('../middleware/middleware');

// For User
router.post('/login-user', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
        type: user.type,
      },
    });


  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
})

router.post('/register-user', async (req, res) => {
  try {
    const { fullname, email, password, phone } = req.body;
    const newUser = new User({ fullname, email, password, phone, type: "user" });

    if (!fullname || !email || !password || !phone) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);

    res.json({
      token,
      user: {
        id: newUser._id,
        email: newUser.email,
        type: newUser.type,
      },
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
})


// For BusOwner
router.post('/login-busowner', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    const user = await BusOwner.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
        type: user.type,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post('/register-busowner', async (req, res) => {
  try {
    const { fullname, email, password, phone, companyName } = req.body;
    const newUser = new BusOwner({ fullname, email, password, phone, companyName, type: "busowner" });

    if (!fullname || !email || !password || !phone || !companyName) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    const existingUser = await BusOwner.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);

    res.json({
      token,
      user: {
        id: newUser._id,
        email: newUser.email,
        type: newUser.type,
      },
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
})

// User
// router.get('/getprofile', fetchuser,async (req, res) => {
//   try {
//     const { id } = req.user;
//     const user = await Applicant.findById(id);

//     if (!user) {
//       const user = await Recruiter.findById(id);
//       if (!user) {
//         return res.status(404).json({ message: "User not found" });
//       }
//     }

//     res.json(user);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// })



module.exports = router;