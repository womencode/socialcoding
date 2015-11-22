
require("firebase");
var FirepadUserList = require("./firepad-userlist.js")
require("./index.less");

function init() {
  var url = document.location.href;
  var hasPos = url.indexOf("#")
  var hash = "1234"
  if (hasPos != -1) {
    hash = url.substring(hasPos+1, url.length);
  }
  var firebaseUrl = 'https://torrid-heat-3849.firebaseio.com/filepads/' + hash
  var firepadRef =
      new Firebase(firebaseUrl);
  var codeMirror = CodeMirror(
    document.getElementById('firepad-container'), {
      lineNumbers: true,
      mode: 'javascript'
    });
  var firepad = Firepad.fromCodeMirror(firepadRef, codeMirror, {
    defaultText: '// JavaScript Editing with Firepad!\nfunction go() {\n  var message = "Hello, world.";\n  console.log(message);\n}'
  });
  var userId = Math.floor(Math.random() * 9999999999).toString();
  var firepadUserList =
    FirepadUserList.fromDiv(firepadRef.child('users'),
                            document.getElementById('userlist'), userId);
  firepad.on('ready', function() {
    if (firepad.isHistoryEmpty()) {
      //firepad.setText('Check out the user list to the left!');
      firepad.setText(hash)
    }  
  });

}

init();
