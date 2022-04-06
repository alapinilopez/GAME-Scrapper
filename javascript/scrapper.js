$(document).ready(function (){
    var gameTitles = []
    $(".search-item:parent").children(".item-info").children('.title').children("a").each(function(i, e){
      gameTitles.push($(e).text());
      })
      var gamePriceDecimal = []
      $(".buy--price:parent").children(".decimal").each(function(i, e) {
        gamePriceDecimal.push($(e).text());
      })
      var currency = $(".buy--price:parent").first().children(".currency").text();
      var gamePrice = []
      $(".buy--price:parent").children(".int").each(function(i, e) {
        gamePrice.push($(e).text() + gamePriceDecimal[i])
      })
      // Ya te liabas con TypeScript he pillin....
      var games = gameTitles.map(function(gameTitles, i) {
        return {'name':gameTitles,
                'price':gamePrice[i],
                'currency': currency}
      });
      console.log(games)
  });
