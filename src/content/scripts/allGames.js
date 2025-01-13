$(document).ready(function() {
    $.get( "http://localhost:8080/api/games", function( data ) {
        let games ="";
        data.forEach((game, index) => {
            games += `<li id="${game.id}"><div class='evening-wrapper'><div class='evening-image'><p class='evening-date'>02.01</p>` +
            `<p class='evening-number'>Игра ${index +1}<p/></div></div</li>`;
        })
        $('#games').append(games);

        $("li").click(function() {
            const gameId = $(this).attr('id');
            window.location.href = `/rating-ui/src/content/pages/game.html?id=${gameId}`;
        });
    });
});