// Name: Shanil Lobanwala
// Date: Jan 15, 2020
// Project Name: Plot.ly Homework - Belly Button Biodiversity
// File: Main logic/app.js

// function to generate the bargraph
function buildBarGraph(bbId) {

  // use d3 to read through samples and grab the relevant info for bar chart
  d3.json("samples.json").then((bbSamples) => {
    // 3 parameters needed for bar charts
    var bbSampleSearch = bbSamples.samples;

    // filter vy bbID
    bbSampleSearch = bbSampleSearch.filter(bbSamp => bbSamp.id = bbId);

    // store that object to grab its data
    var bbSampleFiltered = bbSampleSearch[0];

    // grab the info for bar chart now
    var bbSampleVals = bbSampleFiltered.sample_values;
    var bbOTUIds = bbSampleFiltered.otu_ids;
    var bbOTULabels = bbSampleFiltered.otu_labels;

    console.log(bbSampleVals + ' ' + bbOTUIds + ' ' + bbOTULabels);
  });
}

// Create an initalize function
function init() {

  // Initial position of dropdown(first element)
  var dropDown = d3.select("#selDataset");
  d3.json("samples.json").then((bbSamples) => {
    var bbId = bbSamples.names;
    bbId.forEach((id) => {
      // console.log(name);
      // populate dropdown with all the ids
      dropDown.append("option").text(id).property("value", id);
    })

    // Populate the bar chart with the first name/number as the starting point on load.
    var firstId = bbId[0];
    // console.log(firstId);
    buildBarGraph(firstId);
  });
}

// Function that index.html element selDataset references
function optionChanged(bbId) {

}

// Call said initialize function
init();
