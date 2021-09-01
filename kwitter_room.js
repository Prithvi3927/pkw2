var firebaseConfig = {
    apiKey: "AIzaSyDACtCuzDw_nvzhY9RGnlToauU7NnalCxY",
    authDomain: "class-test-a8894.firebaseapp.com",
    databaseURL: "https://class-test-a8894-default-rtdb.firebaseio.com",
    projectId: "class-test-a8894",
    storageBucket: "class-test-a8894.appspot.com",
    messagingSenderId: "372462024486",
    appId: "1:372462024486:web:58867bf9e25e3cbd9eb3e7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";
function addRoom()
{ 
     room_name = document.getElementById("room_name").value; 
     firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
      localStorage.setItem("room_name", room_name); window.location = "kwitter_page.html";
     }

