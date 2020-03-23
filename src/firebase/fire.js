import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyD2_E1Plg0hrtCULHfcmUA9cKMj97kzW9Y",
    authDomain: "starwars-5788b.firebaseapp.com",
    databaseURL: "https://starwars-5788b.firebaseio.com",
    projectId: "starwars-5788b",
    storageBucket: "starwars-5788b.appspot.com",
    messagingSenderId: "381361628519",
    appId: "1:381361628519:web:beda190a1cea64df02fbc2",
    measurementId: "G-TX655YPSZY"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
