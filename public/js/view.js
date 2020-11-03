// var nationalParks = require('./npArray')


for (var i = 0; i < nationalParks.length; i++) {
    $("#nationalParks").append(
        `<option value="${nationalParks[i].key}">${nationalParks[i].name}</option>`
    )
}

// need to update this to be on backend

$("#nationalParks").on("change", function (event) {
    // var URL = "https://developer.nps.gov/api/v1/parks?&api_key=dhAHMjbJ35wMczQAt4WAxuNGeYAujaFvC4ov1yQt"

    var parkCode = $("#nationalParks option:selected").val().trim();
    var URL = "https://developer.nps.gov/api/v1/parks?parkCode=" + parkCode + "&api_key=dhAHMjbJ35wMczQAt4WAxuNGeYAujaFvC4ov1yQt"

    $.ajax({
        url: URL,
        method: "GET"
    }).then(function (response) {
        console.log(response.data[0].addresses[0]) 
        
        var parkName = response.data[0].fullName;
        var description = response.data[0].description;

        const namesOfActivitesArray = response.data[0].activities.map(activity => activity.name);
        function allActivities() {
            $('#activity-view').empty();
            var addParkName = $("<h4>");
            addParkName.text("Activities for: " + parkName);
            $('#activity-view').append(addParkName);

            for (var i = 0; i < 5 && i < namesOfActivitesArray.length; i++) {
                var addActivity = $("<li>");
                addActivity.text(namesOfActivitesArray[i]);
                $("#activity-view").append(addActivity);
            }
            var addDescription = $("<p>")
            addDescription.text(description)
            $('#activity-view').append(addDescription);
        }
        allActivities();
    });

});