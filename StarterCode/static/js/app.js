// Name: Shanil Lobanwala
// Date: Jan 15, 2020
// Project Name: Plot.ly Homework - Belly Button Biodiversity
// File: Main logic/app.js



// Create an initalize function
function init() {
  // Initial position of dropdown(first element)
  var dropDown = d3.select("#selDataset");

  d3.json("samples.json").then((data) => {
    var names = data.names;
    names.forEach((name) => {
      // console.log(sample);
      selector.append("option").text(name).property("value", name);
    })
  });
}

// Function that index.html element selDataset references


// Call said initialize function
init();
