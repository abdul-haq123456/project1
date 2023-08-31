//YOUR FIREBASE LINKS

      var firebaseConfig = {
            apiKey: "AIzaSyCMO2jcgPr1nytXhNEZpP2iPIF76fpgZiY",
            authDomain: "project-9cd6a.firebaseapp.com",
            databaseURL: "https://project-9cd6a-default-rtdb.firebaseio.com",
            projectId: "project-9cd6a",
            storageBucket: "project-9cd6a.appspot.com",
            messagingSenderId: "103377476681",
            appId: "1:103377476681:web:ce2c721adb87273bd2f398"
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