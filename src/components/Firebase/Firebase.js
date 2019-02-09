import app from 'firebase/app';
import 'firebase/firebase-auth';

const config = {
  apiKey: 'AIzaSyAGn9IE2JmoomETwbSvIGTcQIpDnMcb8DI',
  authDomain: 'fitfamwebadmin.firebaseapp.com',
  databaseURL: 'https://fitfamwebadmin.firebaseio.com',
  projectId: 'fitfamwebadmin',
  storageBucket: 'fitfamwebadmin.appspot.com',
  messagingSenderId: '527101437413'
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;

//future -> create a second web app in firebase to keep PROD data seperate from DEV data
//Add DEV config variable in the firebase-auth.env file and have the NODE-ENV specify which
//app to load either DEV or PROD
