// My personal API key: dhAHMjbJ35wMczQAt4WAxuNGeYAujaFvC4ov1yQt

// var URL = "https://developer.nps.gov/api/v1/alerts?parkCode=acad,dena"
var URL = "https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=dhAHMjbJ35wMczQAt4WAxuNGeYAujaFvC4ov1yQt"

$.ajax({
url: URL,
method: "GET"
}).then(function(response) {
console.log(response)

});