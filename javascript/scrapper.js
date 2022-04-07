$(document).ready(function () {
  var robar = $.get("https://www.game.es/buscar/juegos-ps5", function (data) {
    var newData = data.replace(/(\r\n|\n|\r|\t)/gm, "");
    var newData2 = newData.substr(newData.indexOf('<body>'), newData.indexOf('</body>')+1)
    $("#hola").html(newData2);
      var gameTitles = []
      $("#hola").find(".search-item:parent").children(".item-info").children('.title').children("a").each(function (i, e) {
        gameTitles.push($(e).html());
      })
      var gamePriceDecimal = []
      $("#hola").find(".buy--price:parent").children(".decimal").each(function (i, e) {
        gamePriceDecimal.push($(e).html());
      });
      var currency = $("#hola").find(".buy--price:parent").first().children(".currency").text();
      var gamePrice = [];
      $("#hola").find(".buy--price:parent").children(".int").each(function (i, e) {
        gamePrice.push($(e).text() + gamePriceDecimal[i])
      });
      
      var games = gameTitles.map(function (gameTitles, i) {
        return {
          'name': gameTitles,
          'price': gamePrice[i],
          'currency': currency
        }
      });
      return games;
    },
  );

  $("#robar").on("click", function () { 
    console.log(JSON.stringify(robar));
   })

  $("#error").error(function() {
    $("#error").show();
  });
});
