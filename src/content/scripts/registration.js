$(document).ready(function() {
    if (localStorage.userType) window.location.href = "home.html";

    $('#createPlayerForm').on( "submit", function($event) {
        $event.preventDefault();
        const requestBody = {};

        $(this).serializeArray().forEach((field, index) => {
            requestBody[field.name] = field.value;
        });

        requestBody.type = "player";

        $.post("http://localhost:8080/api/users", requestBody, function(data) {
            if (data !== null) {
                localStorage.userType = data.type;
                window.location.href = "home.html";
            }
        });
    });
});
