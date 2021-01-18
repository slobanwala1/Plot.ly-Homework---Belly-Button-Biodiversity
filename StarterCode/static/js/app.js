// Name: Shanil Lobanwala
// Date: Jan 15, 2020
// Project Name: Plot.ly Homework - Belly Button Biodiversity
// File: Main logic/app.js


// function to generate the bubble chart
function buildBubbleGraph(bbId) {
  // use d3 to read through samples and grab the relevant info for bubble chart
  d3.json("samples.json").then((bbSamples) => {
    // 3 parameters needed for bar charts
    var bbSampleSearch = bbSamples.samples;
    // filter by bbID
    bbSampleSearch = bbSampleSearch.filter(bbSamp => bbSamp.id == bbId);

    // store that object to grab its data
    var bbSampleFiltered = bbSampleSearch[0];

    // grab the info for bubble chart now
    var bbSampleVals = bbSampleFiltered.sample_values;
    var bbOTUIds = bbSampleFiltered.otu_ids;
    var bbOTULabels = bbSampleFiltered.otu_labels;

    // Console log gives all the bubble chart data in an order
    //console.log(bbSampleVals + ' ' + bbOTUIds + ' ' + bbOTULabels);

    // we can grab all the data for the bubbles not the first 10.
    var bubbleChart = [{
      x: bbOTUIds,
      y: bbSampleVals,
      text: bbOTULabels,
      mode: "markers",
      marker: {
        color: bbOTUIds,
        size: bbSampleVals
      },
      type: "bubble"
    }];

    var layout = {
      margin: {
        t: 0,
      },
      xaxis: {
        title: "OTU ids"
      },
      hovermode: "closest"
    }
  });
}

// function to generate the bar graph
function buildBarGraph(bbId) {
  // console.log('new bbId: '+bbId);
  // use d3 to read through samples and grab the relevant info for bar chart
  d3.json("samples.json").then((bbSamples) => {
    // 3 parameters needed for bar charts
    var bbSampleSearch = bbSamples.samples;
    // filter by bbID
    bbSampleSearch = bbSampleSearch.filter(bbSamp => bbSamp.id == bbId);

    // store that object to grab its data
    var bbSampleFiltered = bbSampleSearch[0];

    // grab the info for bar chart now
    var bbSampleVals = bbSampleFiltered.sample_values;
    var bbOTUIds = bbSampleFiltered.otu_ids;
    var bbOTULabels = bbSampleFiltered.otu_labels;

    // Console log gives all the bar chart data in an order
    //console.log(bbSampleVals + ' ' + bbOTUIds + ' ' + bbOTULabels);

    // Grab the first 10 values as they've been ordered and reverse them because they've been ordered desc
    var barChart = [{
      x: bbSampleVals.slice(0, 10).reverse(),
      y: bbOTUIds.slice(0, 10).map(id => `OTU ${id}`).reverse(),
      text: bbOTULabels.slice(0, 10).reverse(),
      type: "bar",
      orientation: "h"
    }];

    var layout = {
      title: "Top 10 OTUs found in Specific individual",
      margin: { t: 30, l: 150 }
    }

    Plotly.newPlot("bar", barChart, layout);
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
  // console.log(bbId);
  buildBarGraph(bbId);
}

// Call said initialize function
init();
