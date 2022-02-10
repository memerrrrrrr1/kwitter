//YOUR FIREBASE LINKS

const firebaseConfig = {
      apiKey: "AIzaSyD6O0c0hUBvki9g_0RlvtprJHas8nKCvEo",
      authDomain: "kwitter-453fa.firebaseapp.com",
      databaseURL: "https://kwitter-453fa-default-rtdb.firebaseio.com",
      projectId: "kwitter-453fa",
      storageBucket: "kwitter-453fa.appspot.com",
      messagingSenderId: "283483367528",
      appId: "1:283483367528:web:ee276cbb0c5fce381bb3dd"
    };
    

firebase.initializeApp(firebaseConfig);

room_name=localStorage.getItem("roomname");
user_name=localStorage.getItem("username");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       childData = childSnapshot.val(); 
      if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

            name=message_data["name"];
            message=message_data["message"];
            likes=message_data["likes"]

            nametag="<h4>"+name+"<img src='tick.png' class='user_tick'></h4>";
            messagetag="<h4 class='message_h4'>"+message+"</h4>";
            likebutton="<button class='btn btn-primary' id="+firebase_message_id+" value="+likes+" onclick='updateLike(this.id)'>";
            span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ likes +"</span></button><hr>";
             row = nametag + messagetag +likebutton + span_with_tag;
              document.getElementById("output").innerHTML += row;


//Start code

// End code
      } });  }); }
getData();

function updateLike(message_id) {
       console.log("clicked on like button - " + message_id);
        button_id = message_id;
         likes = document.getElementById(button_id).value;
          updated_likes = Number(likes) + 1;
           console.log(updated_likes);
           firebase.database().ref(room_name).child(message_id).update({ likes : updated_likes });
}


function send(){

msg= document.getElementById("textinginput").value;

firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      likes:0
})

document.getElementById("textinginput").value="";

}
function logout(){
      localStorage.removeItem("username")
      localStorage.removeItem("roomname")
       window.location="index.html"
 }