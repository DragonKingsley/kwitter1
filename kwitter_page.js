//YOUR FIREBASE LINKS
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
    user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");
    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code
      console.log(firebase_message_id);
          console.log(message_data);
          name = message_data['name'];
          message = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
      message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

     row = name_with_tag + message_with_tag +like_button + span_with_tag;       
     document.getElementById("output").innerHTML += row;
//End code
   } });  }); }
getData();
function updateLike(message_id){
      console.log("Clicked on Like Button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
}
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
                  name:user_name,
                  message:msg,
                  like:0
            });
            document.getElementById("msg").value = "";
      }

kingsley pls upload the files on github and share it to me
ok I will do that right now let me first go to github
That's great. I am creating a new repository uploading the files