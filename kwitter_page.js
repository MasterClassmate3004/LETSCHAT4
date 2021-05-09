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

  room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value = "";
}

