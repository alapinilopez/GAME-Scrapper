

$(document).ready(function () {
    alert("Robándole al Game");
    
    const webPage = fetch("https://www.game.es/buscar/juegos-ps5", {mode: "no-cors"});
    // const webPage = "https://www.wikipedia.org/";
    const item = {
        name: "name",
        prize: "price"
        
    };
    $.get(webPage, function () {
        [...$find($(".search-item:parent").children(".item-info").children('.title').children("a").each(function(i, e){console.log($(e).text())}))]
    },
    );

});

// $(".search-item:parent").children(".item-info").children('.title').text()