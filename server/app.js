require('dotenv').config()
const express = require('express')
const admin = require('firebase-admin');
const serviceAccount = require('./config/serviceAccountKey.json');
const authRoutes = require('./routes/authRoutes'); // Import the authRoutes
const firestoreRoutes = require('./routes/firestoreRoutes'); // Import Firestore routes
const cors = require('cors'); // Import cors middleware

// express app
const app = express()

// Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://techtitans-b0a90.firebaseio.com'
  });
  
// middleware

app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use('/auth', authRoutes);
app.use('/firestore', firestoreRoutes); // Use Firestore routes

PORT=5011
app.listen(PORT, () => {
    console.log('Listening for requests on port', PORT);
  });
  
  module.exports = app;
