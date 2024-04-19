const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');
const authenticateFirebaseUser = require('../middleware/authenticateFirebaseUser');

router.use(authenticateFirebaseUser); // Use the middleware for all routes in this router

// Firestore route to get tweets of the authenticated user
router.get('/mytweets', async (req, res) => {
    try {
      const userId = req.user.uid; // Access the authenticated user's ID
      const snapshot = await admin.firestore().collection('tweets').where('userId', '==', userId).get();
      const userTweets = [];
      snapshot.forEach(doc => {
        userTweets.push(doc.data());
      });
      res.status(200).json(userTweets);
    } catch (error) {
      console.error('Error getting user tweets', error);
      res.status(500).send('Error getting user tweets');
    }
  });
 // Firestore route to get all tweets
router.get('/tweets', async (req, res) => {
    try {
      const snapshot = await admin.firestore().collection('tweets').get();
      const tweets = [];
      snapshot.forEach(doc => {
        tweets.push(doc.data());
      });
      res.status(200).json(tweets);
    } catch (error) {
      console.error('Error getting tweets', error);
      res.status(500).send('Error getting tweets');
    }
  });

// Firestore route to create a new tweet for the authenticated user
router.post('/tweets', async (req, res) => {
    try {
      const userId = req.user.uid; // Access the authenticated user's ID
      const { content } = req.body;
      const tweetData = {
        userId,
        content,
        createdAt: admin.firestore.FieldValue.serverTimestamp()
      };
      const newTweetRef = await admin.firestore().collection('tweets').add(tweetData);
      const newTweet = await newTweetRef.get();
      res.status(201).json(newTweet.data());
    } catch (error) {
      console.error('Error creating tweet', error);
      res.status(500).send('Error creating tweet');
    }
  });
module.exports = router;