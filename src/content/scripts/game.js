$(document).ready(function() {
    const gameId = new URLSearchParams(window.location.search).get('id');
    $.get( "http://localhost:8080/api/games/gameWithPlayers/" + gameId, function( game ) {
        const sortedGame = game.sort(function(a,b) { return a.seat - b.seat;});
        let table = "<table><tr><th>#</th><th>Игрок</th><th>Роль</th><th>Очки</th><th>Ведущий</th><th>ЛХ</th>" +
                    "<th>Ci</th><th>Штраф</th><th>Сумма</th></tr>";
        sortedGame.forEach((player, index) => {
            const totalScore = player.gameScore + player.judgeScore;
            table += `<tr><td>${player.seat}</td><td>${player.userId}</td><td>${player.role}</td>` +
                     `<td>${player.gameScore}</td><td>${player.judgeScore}</td><td>${player.bestMove}</td>` +
                     `<td>${player.compensationIndex}</td><td>${player.card}</td><td>${totalScore}</td></tr>`;
        });
        table += "</table>";

        $('#game').append(table);
    });
});