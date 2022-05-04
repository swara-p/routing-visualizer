// import { cy } from "./../../graph-data";
// cy = require('./../../graph-data')
var cy = cytoscape({
  container: document.getElementById("cy"),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: cytoscape
    .stylesheet()
    .selector("node")
    .style({
      content: "data(id)",
      "font-size": "12px",
    })
    .selector("edge")
    .style({
      "curve-style": "bezier",
      // "target-arrow-shape": "triangle",
      width: 4,
      content: "data(weight)",
      "font-size": "10px",
      "line-color": "#ddd",
      "target-arrow-color": "#ddd",
    })
    .selector("#a,#b")
    .style({
      shape: "star",
      width: 80,
      height: 80,
    })
    .selector(".highlighted")
    .style({
      "background-color": "#61bffc",
      "line-color": "#61bffc",
      "target-arrow-color": "#61bffc",
      "transition-property": "background-color, line-color, target-arrow-color",
      "transition-duration": "0.5s",
    }),

  elements: {
    nodes: [
      { data: { id: "network_tower"} },
      { data: { id: "receiver"} },
      { data: { id: "CC"} },
      { data: { id: "library"} },
      { data: { id: "admin_block"} },
      { data: { id: "router2"} },
      { data: { id: "router3"} },
      { data: { id: "router4"} },
      { data: { id: "CSE_dept"} },
      { data: { id: "LHC"} },
      { data: { id: "modem1"} },
      { data: { id: "mess1"} },
      { data: { id: "modem2"} },
      { data: { id: "mess2"} },
      { data: { id: "AIDE_dept"} },
      { data: { id: "innovation_hub" } },
      { data: { id: "sports_complex"} },
      { data: { id: "EE_dept"} },
      { data: { id: "router1"} },
      { data: { id: "labs"} },
      { data: { id: "hostel_server"} },
      { data: { id: "CASE"} },
      { data: { id: "data_centre1"} },
      { data: { id: "data_centre2"} },
      { data: { id: "w3"} },
      { data: { id: "G3"} },
      { data: { id: "B1"} },
      { data: { id: "B2"} },
      { data: { id: "G5"} },
    ],

    edges: [
      { data: { id: "t1r1", source: "network_tower", target: "receiver", weight: 12} },
      { data: { id: "r1r2", source: "receiver", target: "CC", weight: 2 } },
      { data: { id: "r2r3", source: "CC", target: "library", weight: 6 } },
      { data: { id: "r2r4", source: "CC", target: "admin_block", weight: 7 } },
      { data: { id: "r2r5", source: "CC", target: "router2", weight: 9 } },
      { data: { id: "r3r4", source: "library", target: "admin_block", weight: 5 } },
      { data: { id: "r3r5", source: "library", target: "router2", weight: 5 } },
      { data: { id: "r4r5", source: "admin_block", target: "router2", weight: 10 } },
      { data: { id: "r5r6", source: "router2", target: "router3", weight: 11 } },
      { data: { id: "r6r7", source: "router3", target: "router4", weight: 3 } },
      { data: { id: "r6r8", source: "router3", target: "CSE_dept", weight: 14 } },
      { data: { id: "r7r8", source: "router4", target: "CSE_dept", weight: 13 } },
      { data: { id: "r7m1", source: "router4", target: "LHC", weight: 20} },
      { data: { id: "r7m2", source: "router4", target: "modem1", weight: 1 } },
      { data: { id: "m1mess1", source: "LHC", target: "mess1", weight: 8 } },
      { data: { id: "m2m4", source: "modem1", target: "modem2", weight: 7 } },
      { data: { id: "mess1r9", source: "mess1", target: "mess2", weight: 2 } },
      { data: { id: "m4r10", source: "modem2", target: "AIDE_dept", weight: 5 } },
      { data: { id: "r9w1", source: "mess2", target: "sports_complex", weight: 2 } },
      { data: { id: "r10w2", source: "AIDE_dept", target: "innovation_hub", weight: 9 } },
      { data: { id: "r8r11", source: "CSE_dept", target: "EE_dept", weight: 8 } },
      { data: { id: "r11r12", source: "EE_dept", target: "router1" , weight: 3} },
      { data: { id: "r11r13", source: "EE_dept", target: "labs", weight: 6 } },
      { data: { id: "r12r13", source: "router1", target: "labs", weight: 5 } },
      { data: { id: "r12s1", source: "router1", target: "hostel_server" , weight:2 } },
      { data: { id: "r13s2", source: "labs", target: "CASE" , weight: 5} },
      { data: { id: "s1G3", source: "hostel_server", target: "G3", weight: 4 } },
      { data: { id: "s1pc2", source: "hostel_server", target: "B1", weight: 11 } },
      { data: { id: "s1pc3", source: "hostel_server", target: "B2", weight: 3 } },
      { data: { id: "s1pc4", source: "hostel_server", target: "G5" , weight: 8} },
      { data: { id: "s1w3", source: "hostel_server", target: "w3" , weight: 5} },
      { data: { id: "s2ser1", source: "CASE", target: "data_centre1", weight: 6 } },
      { data: { id: "s2ser2", source: "CASE", target: "data_centre2", weight: 10 } },
    ],
  },

  layout: {
    name: "cose",
    directed: false,
    roots: "#network_tower",
    padding: 10,
    
  },
});
  

var algo = cy.elements().dijkstra('#network_tower', function(edge){
  return edge.data('weight');
});

algo.pathTo("#data_centre1").select()
var i = 0;
var highlightNextEle = function () {
  if (i < algo.pathTo("#data_centre1").length) {
    algo.pathTo("#data_centre1")[i].addClass("highlighted");
    i++;
    setTimeout(highlightNextEle, 1000);
  }
};

// kick off first highlight
highlightNextEle();
  