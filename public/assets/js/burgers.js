$(function() {
    $(".devour").on("click", function(event) {
        let id = $(this).data("id");
        let burgerId = id;

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burgerId
        }).then(
            function() {
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burg").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                location.reload();
            }
        );
    });
});