// Event listener
d3.selectAll("body").on("change", updatePage);

// Whenever there is a change to the HTML body, 
// the updatePage()function is called
function updatePage() {
  var dropdownMenu = d3.selectAll("#selectOption").node();
  var dropdownMenuID = dropdownMenu.id;
  var selectedOption = dropdownMenu.value;

  console.log(dropdownMenuID);
  console.log(selectedOption);
};