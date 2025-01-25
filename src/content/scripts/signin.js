$(document).ready(function() {
    $('#sing-in-form').on( "submit", function($event) {
        $event.preventDefault();
        const requestBody = {};

        const singInJson = $(this).serializeArray();

        singInJson.forEach((field, index) => {
            requestBody[field.name] = field.value;
        });
    });
});