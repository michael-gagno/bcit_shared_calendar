firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log('Admin is signed in.');
    document.getElementsByTagName('BODY')[0].style.visibility = 'visible';
  } else {
    console.log('Not signed in.');
    window.location.replace("./account.html");
  }
});

function AdminWelcome() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(user.uid);
      db.collection("users").doc(user.uid)
        .get()
        .then(function (doc) {
          var username = doc.data().name;
          console.log(username);
          document.getElementById("username").innerText = "Welcome, " + username;
        })
    } else {
    }
  });
}
AdminWelcome();