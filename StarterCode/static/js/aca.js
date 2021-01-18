// Name: Shanil Lobanwala
// Date: Jan 15, 2020
// Project Name: Plot.ly Homework - Belly Button Biodiversity
// File: Advanced Challenge Assignment/aca.js



// Function to set up gauge with data, called from app.js
function buildGauge(bbWfreq) {
  console.log(bbWfreq);
  // build gauge, to avoid null values
  if(bbWfreq == null) { bbWfreq = 0; }

  // convert string to a float if needed, since we don't know if it has decimals or not
  // since its 0 - 9, we can see its a half circle = 180 deg, so we use that as the standard
  var bbWfreqLevel = parseFloat(bbWfreq) * 20;

  var degrees = 180 - bbWfreqLevel;

  var radius = 0.5;

  var radians = (degrees * Math.PI) / 180;

  var x = radius * Math.cos(radians);

  var y = radius * Math.sin(radians);

  // Angle of the tick
  var mainPath = "M -.03 -0.03 L .03 0.03 L ";

  var xPath = String(x);

  var space = " ";

  var yPath = String(y);

  var pathEnd = " Z";

  var finalPath = mainPath.concat(xPath, space, yPath, pathEnd);

  var data = [{
    type: "scatter",
    x: [0],
    y: [0],
    marker: { size: 12, color: "850000" },
    showlegend: true,
    name: "wFreq",
    text: bbWfreqLevel,
    hoverinfo: "text+name"
  },
  {
    values: [50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50],
        rotation: 90,
        text: ["8-9", "7-8", "6-7", "5-6", "4-5", "3-4", "2-3", "1-2", "0-1", ""],
        textinfo: "text",
        textposition: "inside",
        // get the right rgb values
        marker: {
          colors: [
            "rgba(0, 105, 11, .6)",

            "rgba(11, 120, 22, .6)",

            "rgba(15, 127, 0, .6)",

            "rgba(109, 154, 22, .6)",

            "rgba(167, 202, 42, .6)",

            "rgba(200, 209, 95, .6)",

            "rgba(211, 206, 145, .6)",

            "rgba(235, 226, 202, .6)",

            "rgba(242, 230, 215, .6)",

            "rgba(255, 255, 255, 0)"
          ]
        },
        // Get the right labels, like we talked about before half circle 180/20
        labels: ["8-9", "7-8", "6-7", "5-6", "4-5", "3-4", "2-3", "1-2", "0-1", ""],
        hoverinfo: "label",
        hole: 0.5,
        type: "pie",
        showlegend: true
  }];

  var layout = {
    shapes: [
    {
      type: "path",
      path: finalPath,
      fillcolor: "800000",
      line: {
        color: "800000"
      }
    }],
    title: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week",
    height: 550,
    width: 550,
    xaxis: {
      zeroline: false,
      showticklabels: false,
      showgrid: false,
      range: [-1, 1]
    },
    yaxis: {
      zeroline: false,
      showticklabels: false,
      showgrid: false,
      range: [-1, 1]
    }
  };
var updatedGauge = document.getElementById("gauge");
Plotly.newPlot(updatedGauge, data, layout);
}
