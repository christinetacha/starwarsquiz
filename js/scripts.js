$(document).ready(function() {
    $("form#starWars").submit(function(event) {
      var rebel = parseInt($("input#rebel").val());
      var gender = $("select#gender").val();
      var ewoks = $("select#ewoks").val();

      if (isNaN(rebel)) {
        $("#characterName").empty().append("not typing a number!");
        $("#result").show();
      } else if (rebel < 0) {
        $("#characterName").empty().append("a stuck-up, half-witted, scruffy-looking nerf-herder!!!");
        $("#result").show();
      }  else if (rebel > 10) {
          $("#characterName").empty().append("too rebellious!!!");
          $("#result").show();
      } else if (rebel > 5) {
        if (gender === "male") {
          if (ewoks === "yes") {
            $("#characterName").empty().append("Han Solo <img class='character' src='http://cdn3-www.craveonline.com/assets/uploads/2015/10/HanSoloTrailer.jpg'>");
            $("#result").show();
          } else {
            $("#characterName").empty().append("Finn <img class='character' src='http://cdn.idigitaltimes.com/sites/idigitaltimes.com/files/styles/embedded_full/public/2015/09/06/starwars69897.jpg'>");
            $("#result").show();
          }
        } else {
            if (ewoks === "yes") {
              $("#characterName").empty().append("Maz Kanata <img class='character' src='http://www.starwarsreport.com/wp-content/uploads/2016/01/z1.jpg'>");
              $("#result").show();
            } else {
              $("#characterName").empty().append("Rey <img class='character' src='http://images.techtimes.com/data/images/full/155345/rey.jpg?w=600'>");
              $("#result").show();
            }
          }
        } else {
            if (gender === "male") {
              if (ewoks === "yes")  {
                $("#characterName").empty().append("Chewbacca <img class='character' src='http://www.antifanboy.com/blog/wp-content/uploads/2015/09/chewbacca.jpg'>");
                $("#result").show();
                } else {
                $("#characterName").empty().append("BB-8 <img class='character' src='http://geargods.net/wp-content/uploads/2015/09/bb8-robot-star-wars-episode-vii.png'>");
                $("#result").show();
              }
            } else {
              if (ewoks === "yes")  {
                $("#characterName").empty().append("General Leia <img class='character' src='http://cdn.movieweb.com/img.news.tops/NE2AxWz3Sy3u59_3_b.jpg'>");
                $("#result").show();
              } else {
                $("#characterName").empty().append("Captain Phasma <img class='character' src='http://img11.deviantart.net/5700/i/2015/265/6/4/captain_phasma_by_bronze_dragonrider-d9ajkas.jpg'>");
                $("#result").show();
              }
            }
          }
        event.preventDefault();
    })
});
