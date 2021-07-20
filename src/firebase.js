import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

// Your web app's Firebase configuration
 
var firebaseConfig = {
  apiKey: "AIzaSyCHd3s4Zo79f-0Go0JHOj8yJsZYTsjU-34",
  authDomain: "echofilebin.firebaseapp.com",
  databaseURL: "https://echofilebin.firebaseio.com",
  projectId: "echofilebin",
  storageBucket: "echofilebin.appspot.com",
  messagingSenderId: "441463229487",
  appId: "1:441463229487:web:637109b164c13214380ada"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db=firebase.firestore()
const auth=firebase.auth()


export {db, auth}

