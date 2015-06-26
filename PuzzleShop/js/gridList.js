$(document).ready(function () {

    $("a.switcher").bind("click", function (e) {

        e.preventDefault();

        var theid = $(this).attr("id");
        var theproducts = $("ul#products");
        var classNames = $(this).attr('class').split(' ');

        if ($(this).hasClass("active")) {

            return false;
        }
        else {

            if (theid == "gridview") {

                $(this).addClass("active");
                $("#listview").removeClass("active");

                theproducts.removeClass("list");
                theproducts.addClass("grid");
            }

            else if (theid == "listview") {

                $(this).addClass("active");
                $("#gridview").removeClass("active");

                theproducts.removeClass("grid")
                theproducts.addClass("list");
            }
        }

    });
});