$(document).ready(function () {

  $("#yelpArticles").hide();

  $("#run-search").on("click", function () {
    event.preventDefault();
    $("#yelpArticles").empty();
    var userLocation = $(".location-input").eq(0).val();

    $("#yelpArticles").show();
    yelpQueryURL(userLocation);
  });

  function yelpQueryURL(userLocation) {
    console.log(userLocation);
    var url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search`;
    var yelpKey =
      "Mkvzgj8Vt_NhJJHmP7s5yNOYpOB5P6NgLK6ev6O8HyrhXvhn9nisG3WvUovYSz1PHe3cqnhK8LUThY4AoXJ1O17QoBlD-S4IlovdzhUX2BB0j5RCO3kp4w-R1WknXXYx";

    $.ajax({
      type: "GET",
      url: url,
      headers: {
        Authorization: "Bearer " + yelpKey
      },
      data: {
        term: "brewery",
        location: userLocation
      }
    }).then(function (response) {
      console.log(response);

      // looping through all of the yelp businesses to display the name, address, and image
      for (var i = 0; i < 12; i++) {

        $("#yelpArticles").append(
          `<div class="card m-5" style="width: 18rem;" >
               <img id="yelp-image${i}" class="card-img-top img-fluid">
               <div class="card-body">
               <p id="yelpResult${i}"></p>
               <p id="yelpAddress${i}"></p>
               <p id="yelpRating${i}"></p>
               </div>
             </div>`)


        var name = response.businesses[i].name;
        $("#yelpResult" + [i]).text(name);

        var rating = response.businesses[i].rating;
        $("#yelpRating" + [i]).text("Rating: " + rating);

        var yelpImage = $(`#yelp-image${i}`);
        yelpImage.attr("src", response.businesses[i].image_url);
        yelpImage.addClass("yelp-images");

        var address = response.businesses[i].location.address1;
        var city = response.businesses[i].location.city;
        var state = response.businesses[i].location.state;
        var zip = response.businesses[i].location.zip_code;

        $("#yelpAddress" + [i]).text(
          address + ", " + city + ", " + state + " " + zip
        );

      }
    });
  }
  // Beers: Light beers, Sours, Ciders, Porters, IPA

  $("#submit-btn").on("click", function () {
//WHEN YOU DECIDE GIF WRITE ID HERE FOR THE RESULT
    var id = "l0MYrZOf3nGchoTdK";
    var queryUrl =
      "https://api.giphy.com/v1/gifs/" +
      id +
      "?api_key=2bWMtTcIEwQIgbcCIAOXnhGFI9XyklEZ";

    $.ajax({
      url: queryUrl,
      method: "GET"
    }).then(function (response) {
      var results = response.data.images.fixed_height.url;
      var gifImage = $("<img>");
      gifImage.attr("src", results);
      gifImage.attr("alt", "Cheers");
      // console.log(results);
      $("#gif-image").prepend(gifImage);
      $("#cheersButton").hide();
    });
  });
});