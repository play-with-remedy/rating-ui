$(document).ready(function() {
    $.get( "http://localhost:8080/api/ratings", function( data ) {
        let ratings ="";
        data.forEach((rating, index) => {
            games += `<li id="${eveninng.id}"><div class='evening-wrapper'><div class='evening-image'><p class='evening-date'>
            ${moment(evening.date).format("DD.MM")}</p><p class='evening-number'>Вечер ${index +1}<p/></div></div</li>`;
        })
        $('#games').append(ratings);

        $("li").click(function() {
            const eveningId = $(this).attr('id');
            window.location.href = `/rating-ui/src/content/pages/evening.html?id=${eveningId}`;
        });
    });
});