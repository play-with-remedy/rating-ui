$(document).ready(function() {
    $.get( "http://localhost:8080/api/games", function( data ) {
        let games ="";
        data.forEach((game) => {
            games += `<li>${game.result}</li>`;
        })
        $('#games').append(games);
    });
});