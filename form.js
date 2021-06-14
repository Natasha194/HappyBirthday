  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyALxrw607kA14RHXWvNb3sb4Wb-cbC2GZg",
    authDomain: "music-login-signup.firebaseapp.com",
    databaseURL: "https://music-login-signup-default-rtdb.firebaseio.com",
    projectId: "music-login-signup",
    storageBucket: "music-login-signup.appspot.com",
    messagingSenderId: "321307300055",
    appId: "1:321307300055:web:7280bf892dea2526a42092",
    measurementId: "G-48FQ2DQTNB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function signUp() {

var email = document.getElementById("email");
var password = document.getElementById("password");

const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
promise.catch(e => alert(e.message));

alert("Signed Up");

window.location = "bday.html";
}




