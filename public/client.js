// client-side js
// run by the browser each time your view template is loaded

var loginData = {user: "user1", pass: "password"};

$('#submit-login').on('click',function(){
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
