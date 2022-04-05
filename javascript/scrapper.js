(document).ready(function () {
      $.get("https://www.game.es/buscar/juegos-ps5", function(data)
           {[...$find($(".search-item:parent").children(".item-info").children('.title').text())]
              alert()
          },
          "dataType"
      ); 
      
});