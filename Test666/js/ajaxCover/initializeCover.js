
//test
    $.get("api/Cover", function (results) {
        $.each(results, function (i, results) {

            var x = results;
            var id = x.Id;
            var Navn = x.Navn;
            var url = x.url;

            $(".slides").append("<li> <img class='img-rounded' src='bilder/" + url + "'/> </li>");
        });
    });

