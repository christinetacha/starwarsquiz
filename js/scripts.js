$(document).ready(function() {
    $("form#starWars").submit(function(event) {
      var rebel = parseInt($("input#rebel").val());
      var gender = $("select#gender").val();
      var ewoks = $("select#ewoks").val();

      if (rebel > 5) {
        if (gender === "male") {
          if (ewoks === "yes") {
            $("#characterName").empty().append("Han Solo");
            $("#result").show();
          } else {
            $("#characterName").empty().append("Finn");
            $("#result").show();
          }
        } else {
            if (ewoks === "yes") {
              $("#characterName").empty().append("Maz Kanta");
              $("#result").show();
            } else {
              $("#characterName").empty().append("Rey");
              $("#result").show();
            }
          }
        } else {
            if (gender === "male") {
              if (ewoks === "yes")  {
                $("#characterName").empty().append("Chewbacca");
                $("#result").show();
              } else {
                $("#characterName").empty().append("BB-8");
                $("#result").show();
              }
            } else {
              if (ewoks === "yes")  {
                $("#characterName").empty().append("General Leia");
                $("#result").show();
              } else {
                $("#characterName").empty().append("Captain Phasma");
                $("#result").show();
              }
            }
          } 
        event.preventDefault();
    })
});
