firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('Admin is signed in.');
      document.getElementsByTagName('BODY')[0].style.visibility = 'visible';
    } else {
      console.log('Not signed in.');
      window.location.replace("./account.html");
    }
  });