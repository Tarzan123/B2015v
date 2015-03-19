

    $.get("api/VideoPlayer", function (results) {
        $.each(results, function (i, results) {

            var x = results;
            var id = x.Id;
            var tittel = x.Tittel;
            var url = x.Url;

            $("#slider").append("<div id='isContent' class='slide" + id + "'>" +
                                "<img src='bilder/" + url + "' alt='slide" + tittel + "' class='img-thumbnail' data-val='video'/>" +
                                '</div>');
        });

        initSlider();

    }).fail(function () {

        alert("det feilet");
    });

