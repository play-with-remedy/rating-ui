$(document).ready(function() {
    if (localStorage.userType) window.location.href = "home.html";

    $('#sing-in-form').on( "submit", function($event) {
        $event.preventDefault();
        const requestBody = {};

        const singInJson = $(this).serializeArray();

        singInJson.forEach((field, index) => {
            requestBody[field.name] = field.value;
        });

        $.post("http://localhost:8080/api/users/signIn", requestBody, function(data) {
            if (data !== null && data.password !== "") {
                localStorage.userType = data.type;
                localStorage.user = data.nickname;
                window.location.href = "home.html";
            } else {
                $(".sign-in-error").css("visibility", "visible");
            }
        });
    });
});