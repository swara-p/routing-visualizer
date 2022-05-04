export const cy = cytoscape({
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
  
    elements: data,
  
    layout: {
      name: "cose",
      directed: true,
      roots: "#t1",
      padding: 10,
    },
  });