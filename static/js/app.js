// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.

var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
      let date = d3.select("#datetime");
      let city = d3.select("#city");
      let state = d3.select("#state");
      let country = d3.select("#country");
      let shape = d3.select("#shape");

    // 4b. Save the value that was changed as a variable.
      let datec = date.property("value");
      let cityc = city.property("value");
      let statec = state.property("value");
      let countryc = country.property("value");
      let shapec = shape.property("value");

    // 4c. Save the id of the filter that was changed as a variable.

      let datecid = date.attr("id");
      let citycid = city.attr("id");
      let statecid = state.attr("id");
      let countrycid = country.attr("id");
      let shapecid = shape.attr("id");

    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
 
      if (datec) {
        filters[datecid] = datec;
      }
      else {
        delete filters[datecid];
      }

      if (cityc) {
        filters[citycid] = cityc;
      }
      else {
        delete filters[citycid];
      }

      if (statec) {
        filters[statecid] = statec;
      }
      else {
        delete filters[statecid];
      }

      if (countryc) {
        filters[countrycid] = countryc;
      }
      else {
        delete filters[countrycid];
      }

      if (shapec) {
        filters[shapecid] = shapec;
      }
      else {
        delete filters[shapecid];
      }

    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    
    let filteredData = tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    
    Object.entries(filters).forEach(([key, value])=> {
      filteredData = filteredData.filter(row => row[key] === value);
    });
  
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("input").on("change", updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData);
