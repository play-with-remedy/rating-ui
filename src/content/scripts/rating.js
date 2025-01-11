$(document).ready(function() {
    $.get( "http://localhost:8080/api/games/gamesWithPlayers", function( data ) {
        const groupedDataWithSum  = data.reduce((player, obj) => {
            const key = obj.userId;

            if (!player[key]) {
                player[key] = {
                    games: 0,
                    gameScore: 0,
                    judgeScore: 0,
                    totalScore: 0,
                };
            }

            player[key].games++;
            player[key].gameScore += obj.gameScore;
            player[key].judgeScore += obj.judgeScore;
            player[key].totalScore += obj.gameScore + obj.judgeScore;

            return player;
        }, {});

        const sortedArray = Object.entries(groupedDataWithSum)
            .sort(([, a], [, b]) => b.totalScore - a.totalScore)

        console.log(sortedArray);

        createTable(sortedArray);
    });

    function createTable(sortedArray) {
        $.get( "http://localhost:8080/api/users", function(users) {
            let table = "<tr><th>#</th><th>Игрок</th><th>Всего игр</th><th>Балы за игру</th><th>Балы от судей</th><th>Сумма</th></tr>";
            sortedArray.forEach((player, index) => {
                table += `<tr><td>${index + 1}</td><td>${users.find(user => user.id.toString() === player[0]).nickname}</td>` +
                `<td>${player[1].games}</td><td>${player[1].gameScore}</td><td>${player[1].judgeScore}</td><td>${player[1].totalScore}</td>`
            });

            $("#rating").append(table);
        });
    }
});