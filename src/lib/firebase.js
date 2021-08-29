import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { seedDatabase } from '. ./seed';

const config = {
  apiKey: 'AIzaSyDkIwHhUaO92HKmmh2aOWROAz4aqMx8cjk',
  authDomain: 'instagram-yt-iakgoog.firebaseapp.com',
  projectId: 'instagram-yt-iakgoog',
  storageBucket: 'instagram-yt-iakgoog.appspot.com',
  messagingSenderId: '458264293321',
  appId: '1:458264293321:web:f89b78c91c1d629aea8218',
  measurementId: 'G-GF1WDXL1QT'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };
