const firebaseConfig = {
  apiKey: "AIzaSyB5_nZKyTCyiZ1Gl2--2zu0OTBapKQXZIQ",
  authDomain: "kwitter-fbdb6.firebaseapp.com",
  databaseURL: "https://kwitter-fbdb6-default-rtdb.firebaseio.com",
  projectId: "kwitter-fbdb6",
  storageBucket: "kwitter-fbdb6.appspot.com",
  messagingSenderId: "364999135436",
  appId: "1:364999135436:web:048d63da505b7b990a7269"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

userName = localStorage.getItem("userName");
document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;
  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });
    localStorage.setItem("roomName", roomName);    
    window.location = "kwitterPage.html";
}

function getData() 
{  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
  window.location = "kwitterPage.html";
}

function logout() {
 localStorage.removeItem("userName");
 localStorage.removeItem("roomName");
 window.location = "index.html";
}
