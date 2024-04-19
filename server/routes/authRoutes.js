// // authRoutes.js

// const express = require('express');
// const router = express.Router();
// const admin = require('firebase-admin');

// // Sign-up route

// router.post('/signup', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await admin.auth().createUser({
//       email,
//       password
//     });
//     res.status(201).send(user);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// // Sign-in route
// router.post('/signin', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const userCredential = await admin.auth().signInWithEmailAndPassword(email, password);
//     res.send(userCredential.user);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// // Sign-out route
// router.post('/signout', async (req, res) => {
//   try {
//     await admin.auth().signOut();
//     res.status(204).send();
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// module.exports = router;
// authRoutes.js

const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');

// Sign-up route
router.post('/signup', async (req, res) => {
  try {
    const { email, password, username } = req.body;
    
    // Create the user with email and password
    const userRecord = await admin.auth().createUser({
      email,
      password
    });

    // Update the user's display name (username)
    await admin.auth().updateUser(userRecord.uid, {
      displayName: username
    });

    // Send a response with the user details
    res.status(201).send(userRecord);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Sign-in route
router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    const userCredential = await admin.auth().signInWithEmailAndPassword(email, password);
    res.send(userCredential.user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Sign-out route
router.post('/signout', async (req, res) => {
  try {
    await admin.auth().signOut();
    res.status(204).send();
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;

