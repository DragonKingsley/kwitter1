
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDcjHKmAagsscduNxsGRXL7qZRlKGSzhUw",
      authDomain: "project2-2339e.firebaseapp.com",
      databaseURL: "https://project2-2339e-default-rtdb.firebaseio.com",
      projectId: "project2-2339e",
      storageBucket: "project2-2339e.appspot.com",
      messagingSenderId: "950591981908",
      appId: "1:950591981908:web:0a6fee4f1e900e2abda0c1",
      measurementId: "G-NKTMHTT8Z1"
    };
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML=" Welcome "+ user_name+"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
 
function addRoom(){
      room_name =  document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name", room_name
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}
