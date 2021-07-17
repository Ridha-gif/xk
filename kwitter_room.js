var login_id="";
login_id = localStorage.getItem("user_name");
document.getElementById("welc").innerHTML="welcome " +login_id;
room_name="";

  var firebaseConfig = {
    apiKey: "AIzaSyCOGw8JNx4ADvCelnvV2zuh7-0M5meXscM",
    authDomain: "class-93-4819f.firebaseapp.com",
    databaseURL: "https://class-93-4819f-default-rtdb.firebaseio.com",
    projectId: "class-93-4819f",
    storageBucket: "class-93-4819f.appspot.com",
    messagingSenderId: "1098250623780",
    appId: "1:1098250623780:web:17480dfa2780a1eaea31b1",
    measurementId: "G-064W5E6DTT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    function addRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
  purpose:"room name"

});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;

      //End code
      });});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="Kwitter_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}

