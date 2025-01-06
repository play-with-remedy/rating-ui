$(document).ready(function() {
    $.get( "http://localhost:8080/api/users", function( data ) {
      alert(JSON.stringify(data) );
    });
});