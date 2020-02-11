// client-side js
// run by the browser each time your view template is loaded

var loginData = {user: "user1", pass: "test"};

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
      console.log('ajax complete');
    },
    success: function(data) {
      console.log(data);
      console.log('ajax sucess');
   },
    error: function() {
      console.log('ajax error');
    },
  });
});
