$(function() {
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      
      var name = $("#model-camp-name").text();
      console.log(name);
      
      var newRating = {
        camp_name: name,
        rating: $("#rating").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/ratings", {
        type: "POST",
        data: newRating
      }).then(
        function() {
          console.log("created new rating");
        }
      );
    });
  });
  