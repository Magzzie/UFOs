// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Create a function to fill the table with data. 
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");

    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body ('table row')
       let row = tbody.append("tr");

       // Loop through each field in the dataRow and add
       // each value as a table cell (td) ('tabe data')
       Object.values(dataRow).forEach((val) => {
           let cell = row.append("td");
           cell.text(val);
       });
    });
};

// Create a function to filter the table on date after user's click.
function handleClick() {
    // Select the datetime id and grab that info and hold it in a variable
    // (Grab the datetime value from the filter)
    let date = d3.select("#datetime").property("value");
    
    // Set a default filter and save it to a new variable.
    // default filter is the original table data (raw data) because we want  
    // users to refine search on their own terms. 
    // If no date has been entered by user as a filter, then all of the data will be returned instead.
    let filteredData = tableData;

    // Chack to see if a date was entered and filter the 
    // data using that date.
    if (date) {
        // Apply `filter` to the table data to only keep the 
        // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    // @NOTE: if no date was entered, then filteredData will
    // just be the original tableDate. 
    buildTable(filteredData);
};

// Attach an event to listen for the form button.
d3.selectAll("#filter-btn").on("click", handleClick);

// Call the original table to build the table when the page loads.
buildTable(tableData);






















