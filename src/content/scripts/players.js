$(document).ready(function() {
    $('#createPlayerForm').on( "submit", function($event) {
        $event.preventDefault();
        const userJson = $(this).serializeArray();

        $.post("http://localhost:8080/api/users", userJson, function(data) {

        });
    });
});
