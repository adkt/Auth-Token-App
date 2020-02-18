// client-side js
var indexLogin = $('#login').val('user1');
var indexPass = $('#pass').val('password');

$('#submit-login').on('click',function(){
  // get fields
  var indexLogin = $('#login').val();
  var indexPass = $('#pass').val();
  var loginData = {user: indexLogin, pass: indexPass};
  
  // make call to server
  $.ajax({
    url: "/login",
    type: "POST",
    dataType: "json",
    data: JSON.stringify(loginData),
    contentType: "application/json",
    cache: false,
    timeout: 5000,
    complete: function() {
    },
    success: function(data) {
    },
    error: function() {
    },
  });
});
