console.log(cityGrowths);


// Sorting cities by growth in descending order
var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse();

// Selecting top 5 cities by population growth
var topFiveCities = sortedCities.slice(0,5);

// create two arrays: an array of city names, 
// and an array of corresponding population growths
// parseInt() converts str into int
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

// Creating bar chart

var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
};
var data = [trace];
var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "Cities"},
    yaxis: {title: "Population Growth 2016-2017"}
};
Plotly.newPlot("bar-plot", data, layout)