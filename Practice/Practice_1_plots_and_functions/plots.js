// Line-chart
// Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);


// Bar-chart
// var trace = {
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
//  };

//  var layout = {
//     title: "Luncheon Survey",
//     xaxis: {title: "Food Option"},
//     yaxis: {title: "Number of Respondents"}
// };

// Plotly.newPlot("plotArea", [trace], layout);

// Bar_chart_2
// var drinks = ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"];

// var percent = [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6];

// var graph = {
//     x: drinks,
//     y: percent,
//     type: "pie"
// };

// var layout = {
//     title: "Popularity of Drinks",
//     xaxis: {title: "Drink Type"},
//     yaxis: {title: "Percentage of Orders"}
// };

// Plotly.newPlot("plotArea", [graph], layout)


// Variant of Bar_chart_2
// var trace = {
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "bar"
//    };
//    var data = [trace];
//    var layout = {
//     title: "'Bar' Chart",
//     xaxis: { title: "Drinks"},
//     yaxis: { title: "% of Drinks Ordered"}
//    };
//    Plotly.newPlot("plotArea", data, layout);



// Pie_chart
var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
   };
   var data = [trace];
   var layout = {
    title: "'Pie' Chart",
   };
   Plotly.newPlot("plotArea", data, layout);


// Map function practice

// #1
// var numbers = [1,2,3,4,5];
// var doubled = numbers.map(function(num){
//     return num * 2;
// });
// console.log(doubled);

// #2
// var numbers = [0,2,4,6,8];
// var plusFive = numbers.map(number => number+5)
// console.log(plusFive)

// #3
// var cities = [
//     {
//       "Rank": 1,
//       "City": "San Antonio ",
//       "State": "Texas",
//       "Increase_from_2016": "24208",
//       "population": "1511946"
//     },
//     {
//       "Rank": 2,
//       "City": "Phoenix ",
//       "State": "Arizona",
//       "Increase_from_2016": "24036",
//       "population": "1626078"
//     },
//     {
//       "Rank": 3,
//       "City": "Dallas",
//       "State": "Texas",
//       "Increase_from_2016": "18935",
//       "population": "1341075"
//     }
// ];

// var cityNames = cities.map(function(city){
//     return city.City;
// });
// console.log(cityNames);



// Filter function practice

// #1
// var numbers = [1,2,3,4,5];

// var larger = numbers.filter(function(num){
//     return num > 1;
// });

// console.log(larger);


// #2
// var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

// var sLetter = words.filter(word => word.startsWith('s'))
// console.log(sLetter);



// Sort function practice
// var familyAge = [3,2,39,37,9];
// var sortedAge = familyAge.sort((a,b) => a - b);
// console.log(sortedAge);
// #reverse sorts an array in descending order



// Slice function practice
// Slices elements from index 0 and 1. 2 is not included
// var integers = [0,1,2,3,4,5];
// var slice1 = integers.slice(0,2);