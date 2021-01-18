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
  var bbWfreqLevel = parseFloat(bbWfreq) * 20;

  var degrees = 180 - bbWfreqLevel;

  var radius = 0.5;

  var radians = (degrees * Math.PI) / 180;

  var x = radius * Math.cos(radians);

  var y = radius * Math.sin(radians);

  var mainPath = "M -.0 -0.05 L .0 0.05 L ";
  var pathX = String(x);
  var space = " ";
  var pathY = String(y);
  var pathEnd = " Z";
  var path = mainPath.concat(pathX, space, pathY, pathEnd);

  var data = [{
    type: "indicator",
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
        marker: {
          colors: [
            "rgba(0, 105, 11, .5)",
            "rgba(10, 120, 22, .5)",
            "rgba(14, 127, 0, .5)",
            "rgba(110, 154, 22, .5)",
            "rgba(170, 202, 42, .5)",
            "rgba(202, 209, 95, .5)",
            "rgba(210, 206, 145, .5)",
            "rgba(232, 226, 202, .5)",
            "rgba(240, 230, 215, .5)",
            "rgba(255, 255, 255, 0)"
          ]
        },
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
          path: path,
          fillcolor: "850000",
          line: {
            color: "850000"
          }
        }
      ],
      title: "Belly Button Washing Frequency Scrubs per Week",
      height: 500,
      width: 500,
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
