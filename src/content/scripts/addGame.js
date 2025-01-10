$(document).ready(function() {

    let table = "<table><tr><th>#</th><th>Игрок</th><th>Роль</th><th>Очки</th><th>Ведущий</th><th>ЛХ</th><th>Ci</th><th>Штраф</th></tr>";

    for (let i = 1; i <= 10; i++) {
        table += `<tr><td>${i}</td><td><input name='player' type='text'/></td>`;
        table += `<td><select name='role${i}'><option disabled selected hidden></option><option value='CITIZEN'>Мирный Житель</option>` +
                 `<option value='MAFIA'>Мафия</option><option value='DON'>Дон</option><option value='SHERIF'>Шериф</option></select></td>`;
        table += `<td><select name='gamePoints${i}'><option selected value='0'>0</option><option value='2.5'>2,5</option><option value='-2.5'>-2,5</option></select></td>`;
        table += `<td><select name='judgePoints${i}'><option selected value='0'>0</option><option value="0.25">0,25</option><option value="0.5">0,5</option><option value="0.75">0,75</option>` +
                 `<option value='1'>1</option><option value='1.25'>1,25</option><option value='1.5'>1,5</option><option value='1.75'>1,75</option>` +
                 `<option value='2'>2</option><option value='2.25'>2,25</option><option value='2.5'>2,5</option><option value='2.75'>2,75</option>` +
                 `<option value='3'>3</option><option value='3.25'>3,25</option><option value='3.5'>3,5</option><option value='3.75'>3,75</option>` +
                 `<option value='4'>4</option><option value='4.25'>4,25</option><option value='4.5'>4,5</option><option value='4.75'>4,75</option>` +
                 `<option value='5'>5</option></select></td>`;
        table += `<td><select name='bestMove${i}'><option selected value='0'>0</option><option value="0.5">0,5</option><option value="1">1</option></select></td>`;
        table += `<td><select name='compensationIndex${i}'><option selected value='0'>0</option><option value="0.5">0,5</option><option value="1">1</option>` +
                 `<option value="1.5">1,5</option><option value="2">2</option></select></td>`;
        table += `<td><select name='card${i}'><option selected value='0'>0</option><option value="0.5">0,5</option><option value="1">1</option>` +
                 `<option value="1.5">1,5</option><option value="2">2</option>` +
                 `<option value="2.5">2,5</option><option value="3">3</option></select></td>`;
        table += "</tr>"
    }

    table += "</table>"
    $("#gameTable").append(table);

    $('#createGameForm').on( "submit", function($event) {
        $event.preventDefault();
        const gameData = $(this).serializeArray();
        alert(JSON.stringify(gameData));

        let gameJson = {};
        let gamePlayerJson = {};
        gameData.forEach((game, index) => {
            if (game.name === "date") gameJson.date = moment(game.value).format("YYYY-MM-DD");
            if (game.name === "result") gameJson.result = game.value;
        });

        $.post("http://localhost:8080/api/games", gameJson, function(game) {
g           gamePlayerJson.gameId = game.id;
        });
    });
});