for (var i = 0; i < nationalParks.length; i++) {
    $("#nationalParks").append(
        `<option value="${nationalParks[i].key}">${nationalParks[i].name}</option>`
    )
};

for (var i = 0; i < stateCode.length; i++) {
    $("#statePick").append(
        `<option value="${stateCode[i]}">${stateCode[i]}</option>`
    )
};

// need to update this to be on backend
$("#nationalParks").on("change", event => {
    var parkCode = $("#nationalParks option:selected").val().trim();
    // begin server call for NPS API key
    $.ajax("/apikey", {
        type: "GET"
    }).then(res => {
        var URL = "https://developer.nps.gov/api/v1/parks?parkCode=" + parkCode + res.apikey; 
        // calls NPS API for park information
        $.ajax({
            url: URL,
            method: "GET"
        }).then(response => {

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
});

$("#statePick").on("change", function (event) {
    var stateSelected = $("#statePick option:selected").val().trim();
    let query = `?state=${stateSelected}`
    document.location.search = query;
});

