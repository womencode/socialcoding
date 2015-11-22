
require("firebase")

function init() {
  //// Initialize Firebase.
  var firepadRef = new Firebase('https://torrid-heat-3849.firebaseio.com/filepads/1234');
  
  //// Create CodeMirror (with line numbers and the JavaScript mode).
  var codeMirror = CodeMirror(document.getElementById('firepad-container'), {
    lineNumbers: true,
    mode: 'javascript'
  });
  
  //// Create Firepad.
  var firepad = Firepad.fromCodeMirror(firepadRef, codeMirror, {
    defaultText: '// JavaScript Editing with Firepad!\nfunction go() {\n  var message = "Hello, world.";\n  console.log(message);\n}'
  });
  
  // Create a random ID to use as our user ID (we must give this
  // to firepad and FirepadUserList).
  var userId = Math.floor(Math.random() * 9999999999).toString();
  
  //// Create FirepadUserList (with our desired userId).
  var firepadUserList = FirepadUserList.fromDiv(firepadRef.child('users'),
                                                document.getElementById('userlist'), userId);
  
  //// Initialize contents.
  firepad.on('ready', function() {
    if (firepad.isHistoryEmpty()) {
      //firepad.setText('Check out the user list to the left!');
    }  
  });
  
}

init();
