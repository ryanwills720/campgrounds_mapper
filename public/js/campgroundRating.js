$(function() {
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newRating = {
        rating: $("#rating").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/campgrounds", {
        type: "POST",
        data: newRating
      }).then(
        function() {
          console.log("created new rating");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  