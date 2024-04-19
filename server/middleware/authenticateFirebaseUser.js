const admin = require('firebase-admin');

const authenticateFirebaseUser = async (req, res, next) => {
  try {
    const idToken = req.headers.authorization.split(' ')[1]; // Assuming the token is passed in the Authorization header

    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken; // Attach user information to req.user
    next();
  } catch (error) {
    console.error('Error authenticating Firebase user', error);
    res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = authenticateFirebaseUser;
