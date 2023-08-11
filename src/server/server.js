const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(express.json());

const PORT = 5000;
const PORT2 = 8000;


// user Middleware
app.use(bodyParser.json());
app.use(cors());
app.post('/user/signup',async (req,res)=>{
let user = new User();
user.name=req.body.name;
user.username=req.body.username;
user.password=req.body.password;
user.phone=req.body.phone;
user.address=req.body.address;
const doc= await user.save();

    console.log(doc);
    res.json(doc);
})

// User data endpoint
app.get('/api/user', async (req, res) => {
  try {
    const user = await User.findOne(); // Retrieve the user data from the database
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User data not found' });
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// Admin data endpoint
app.get('/api/admin', async (req, res) => {
  try {
    const admin = await Admin.findOne(); // Retrieve the admin data from the database
    if (admin) {
      res.json(admin);
    } else {
      res.status(404).json({ message: 'Admin data not found' });
    }
  } catch (error) {
    console.error('Error fetching admin data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
// Admin Middleware
app.post('/admin/signup',async (req,res)=>{
  let admin = new Admin();
  admin.adminName=req.body.adminName;
  admin.adminId=req.body.adminId;
  admin.password=req.body.password;
  admin.password=req.body.password;
  admin.phone=req.body.phone;
  const doc= await admin.save();

  console.log(doc);
  res.json(doc);
})

// MongoDB connection

    mongoose.connect('mongodb://127.0.0.1:27017/gymdb');
    console.log('db connected')



const User = require('./User'); // Define User schema/model
const Admin = require('./Admin'); // Define Admin schema/model

// ... (other imports and middleware)

// User Signup
// Routes
app.post('/user/signup', async (req, res) => {
    const userData = req.body;
    console.log('User Signup Data:', userData); // Log the input data
    
    const newUser = new User(userData);
  
    try {
      const savedUser = await newUser.save();
      console.log('User signup successful:', savedUser);
      res.json({ message: 'User signup successful', userData: savedUser });
    } catch (error) {
      console.error('Error signing up user:', error); // Log error
      res.status(500).json({ message: 'Error signing up user' });
    }
  });
  
  app.post('/admin/signup', async (req, res) => {
    const adminData = req.body;
    console.log('Admin Signup Data:', adminData); // Log the input data
    
    const newAdmin = new Admin(adminData);
  
    try {
      const savedAdmin = await newAdmin.save();
      res.json({ message: 'Admin signup successful', adminData: savedAdmin });
    } catch (error) {
      res.status(500).json({ message: 'Error signing up admin' });
    }
  });
  
  // ... (other routes and server listen)
  
  
  // ... (other routes and server listen)
  

// Routes
app.post('/user/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  
  if (user) {
    res.json({ message: 'User login successful', userData: user });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.post('/admin/login', async (req, res) => {
  const { adminId, password } = req.body;
  const admin = await Admin.findOne({ adminId, password });
  
  if (admin) {
    res.json({ message: 'Admin login successful', adminData: admin });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});



// Start server
app.listen(PORT, () => {
  console.log(`User Server is running on port ${PORT}`);
});

// Start server
app.listen(PORT2, () => {
  console.log(`Admin Server is running on port ${PORT2}`);
});
