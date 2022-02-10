
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyD6O0c0hUBvki9g_0RlvtprJHas8nKCvEo",
      authDomain: "kwitter-453fa.firebaseapp.com",
      databaseURL: "https://kwitter-453fa-default-rtdb.firebaseio.com",
      projectId: "kwitter-453fa",
      storageBucket: "kwitter-453fa.appspot.com",
      messagingSenderId: "283483367528",
      appId: "1:283483367528:web:ee276cbb0c5fce381bb3dd"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
user_name = localStorage.getItem("username")

document.getElementById("h3_username").innerHTML="Welcome "+user_name+"!";

function enter_room(){
      room_name=document.getElementById("room_search").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      })
      localStorage.setItem("roomname",room_name)
      window.location="chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_div' id="+Room_names+" onclick='redirect_room(this.id)'>"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML+=row
      //End code
      });});}
getData()
function logout(){
     localStorage.removeItem("username")
     localStorage.removeItem("roomname")
      window.location="index.html"
}

function redirect_room(name)
{
      localStorage.setItem("roomname",name);
      window.location="chat_page.html";
}
