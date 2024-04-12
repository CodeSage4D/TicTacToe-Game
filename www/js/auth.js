var provider = new firebase.auth.GoogleAuthProvider();
firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    // User signed in successfully
    var user = result.user;
    console.log(user);
  })
  .catch((error) => {
    // Handle errors
    var errorCode = error.code;
    var errorMessage = error.message;
    console.error(errorMessage);
  });

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in
  } else {
    // User is signed out
  }
});

//-----------------------------------------------------------------------
// Sign in with Google provider
var provider = new firebase.auth.GoogleAuthProvider();

// Sign in with popup
firebase.auth().signInWithPopup(provider)
  .then((result) => {
    // User signed in successfully
    var user = result.user;
    console.log("User signed in:", user.displayName);
  })
  .catch((error) => {
    // Handle errors
    var errorCode = error.code;
    var errorMessage = error.message;
    console.error("Error signing in:", errorMessage);
  });
