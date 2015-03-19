
    $.get("api/Cover", function (results) {
        $.each(results, function (i, results) {

            var x = results;
            var id = x.Id;
            var Navn = x.Navn;
            var url = x.url;

            $(".slides").append("<li> <img class='img-thumbnai img-responsive' alt='" +Navn+"' src='bilder/" + url + "'/> </li>");

        });

        initFlexSlider();

    }).fail(function () {
        alert("Noe gikk feil på server siden. Prøver til det fungerer. ");
    }).success(function () {
        alert("Nå er vi på riktig vei");
    });



