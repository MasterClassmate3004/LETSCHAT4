var firebaseConfig = {
    apiKey: "AIzaSyB9B11owzQAsDWSvgy3g6fc_t1p9TW9HHE",
    authDomain: "letschat-5eb44.firebaseapp.com",
    databaseURL: "https://letschat-5eb44-default-rtdb.firebaseio.com",
    projectId: "letschat-5eb44",
    storageBucket: "letschat-5eb44.appspot.com",
    messagingSenderId: "212564933362",
    appId: "1:212564933362:web:5ef40228792c5a03752e6b",
    measurementId: "G-K63EWY09QH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
});

localStorage.setItem("room_name" , room_name);

window.location = "kwitter_page.html";
} 

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
     document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName()
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}