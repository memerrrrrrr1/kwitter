function adduser(){
    username=document.getElementById("log_input").value;
    
    localStorage.setItem("username", username);

window.location="kwitter_room.html";

}
