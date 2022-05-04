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
      })
      .selector("edge")
      .style({
        "curve-style": "bezier",
        "target-arrow-shape": "triangle",
        width: 4,
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
        { data: { id: "t1", class: "tower" } },
        { data: { id: "r1", class: "router" } },
        { data: { id: "r2", class: "router" } },
        { data: { id: "r3", class: "router" } },
        { data: { id: "r4", class: "router" } },
        { data: { id: "r5", class: "router" } },
        { data: { id: "r6", class: "router" } },
        { data: { id: "r7", class: "router" } },
        { data: { id: "r8", class: "router" } },
        { data: { id: "m1", class: "modem" } },
        { data: { id: "m2", class: "modem" } },
        { data: { id: "m3", class: "modem" } },
        { data: { id: "m4", class: "modem" } },
        { data: { id: "r9", class: "router" } },
        { data: { id: "r10", class: "router" } },
        { data: { id: "w2", class: "wifi" } },
        { data: { id: "w1", class: "wifi" } },
        { data: { id: "r11", class: "router" } },
        { data: { id: "r12", class: "router" } },
        { data: { id: "r13", class: "router" } },
        { data: { id: "s1", class: "splitter" } },
        { data: { id: "s2", class: "splitter" } },
        { data: { id: "ser1", class: "server" } },
        { data: { id: "ser2", class: "server" } },
        { data: { id: "w3", class: "wifi" } },
        { data: { id: "pc1", class: "pc" } },
        { data: { id: "pc2", class: "pc" } },
        { data: { id: "pc3", class: "pc" } },
        { data: { id: "pc4", class: "pc" } },
      ],
  
      edges: [
        { data: { id: "t1r1", source: "t1", target: "r1", weight: 12} },
        { data: { id: "r1r2", source: "r1", target: "r2", weight: 2 } },
        { data: { id: "r2r3", source: "r2", target: "r3", weight: 6 } },
        { data: { id: "r2r4", source: "r2", target: "r4", weight: 7 } },
        { data: { id: "r2r5", source: "r2", target: "r5", weight: 9 } },
        { data: { id: "r3r4", source: "r3", target: "r4", weight: 5 } },
        { data: { id: "r3r5", source: "r3", target: "r5", weight: 5 } },
        { data: { id: "r4r5", source: "r4", target: "r5", weight: 10 } },
        { data: { id: "r5r6", source: "r5", target: "r6", weight: 11 } },
        { data: { id: "r6r7", source: "r6", target: "r7", weight: 3 } },
        { data: { id: "r6r8", source: "r6", target: "r8", weight: 14 } },
        { data: { id: "r7r8", source: "r7", target: "r8", weight: 13 } },
        { data: { id: "r7m1", source: "r7", target: "m1", weight: 20} },
        { data: { id: "r7m2", source: "r7", target: "m2", weight: 1 } },
        { data: { id: "m1m3", source: "m1", target: "m3", weight: 8 } },
        { data: { id: "m2m4", source: "m2", target: "m4", weight: 7 } },
        { data: { id: "m3r9", source: "m3", target: "r9", weight: 2 } },
        { data: { id: "m4r10", source: "m4", target: "r10", weight: 5 } },
        { data: { id: "r9w1", source: "r9", target: "w1", weight: 2 } },
        { data: { id: "r10w2", source: "r10", target: "w2", weight: 9 } },
        { data: { id: "r8r11", source: "r8", target: "r11", weight: 8 } },
        { data: { id: "r11r12", source: "r11", target: "r12" , weight: 3} },
        { data: { id: "r11r13", source: "r11", target: "r13", weight: 6 } },
        { data: { id: "r12r13", source: "r12", target: "r13", weight: 5 } },
        { data: { id: "r12s1", source: "r12", target: "s1" , weight:2 } },
        { data: { id: "r13s2", source: "r13", target: "s2" , weight: 5} },
        { data: { id: "s1pc1", source: "s1", target: "pc1", weight: 4 } },
        { data: { id: "s1pc2", source: "s1", target: "pc2", weight: 11 } },
        { data: { id: "s1pc3", source: "s1", target: "pc3", weight: 3 } },
        { data: { id: "s1pc4", source: "s1", target: "pc4" , weight: 8} },
        { data: { id: "s1w3", source: "s1", target: "w3" , weight: 5} },
        { data: { id: "s2ser1", source: "s2", target: "ser1", weight: 6 } },
        { data: { id: "s2ser2", source: "s2", target: "ser2", weight: 10 } },
      ],
    },
  
    layout: {
      name: "cose",
      directed: true,
      roots: "#t1",
      padding: 10,
    },
  });
  
var dfs = cy.elements().aStar({
  root: '#t1',
  goal: '#w3',
  directed: true
})
dfs.path.select()
console.log(dfs.distance)
  
var i = 0;
var highlightNextEle = function () {
  if (i < dfs.path.length) {
    dfs.path[i].addClass("highlighted");
    i++;
    setTimeout(highlightNextEle, 1000);
  }
};

// kick off first highlight
highlightNextEle();
  