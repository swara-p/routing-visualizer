let nodes= [
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
  ]

let edges =  [
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
  ]

// initialize routing table with empty dictionary for each node in nodes
let routingTable = {}
for (let i = 0; i < nodes.length; i++) {
    routingTable[nodes[i].data.id] = {}
}
for (let i = 0; i < nodes.length; i++) {
    // add transition from node to itself
    routingTable[nodes[i].data.id][nodes[i].data.id] = 0


    // add neighbours of node to dictionary
    for (let j = 0; j < edges.length; j++) {
        // if edge leads to node then add neighbour to dictionary
        if (edges[j].data.target === nodes[i].data.id || edges[j].data.source === nodes[i].data.id) {
            routingTable[nodes[i].data.id][edges[j].data.source] = edges[j].data.weight
        }
        
        // // if edge starts from node then add node to dictionary of neighbour
        // if (edges[j].data.source === nodes[i].data.id) {
        //     routingTable[edges[j].data.target][nodes[i].data.id] = edges[j].data.weight
        // }
    }
}

// for 100 iterations do
for (let i = 0; i < 100; i++) {
    // for each source node in nodes
    for (let j = 0; j < nodes.length; j++) {
        // for each neighbour of cource node get the routing table of neighbour
        let table = routingTable[nodes[j].data.id]
        // for each target node in nodes get the cost of transition from source node to target node through neighbour
        for (let k = 0; k < nodes.length; k++) {
            // if target node is not in routing table of neighbour then add it with cost of infinity
            if (!table[nodes[k].data.id]) {
                table[nodes[k].data.id] = Infinity
            }
            // if target node is in routing table of neighbour then update cost of transition in the transition table of source node if it is lower than the cost of transition in the transition table of source node
            else {
                if (table[nodes[k].data.id] > table[nodes[j].data.id] + edges[j].data.weight) {
                    table[nodes[k].data.id] = table[nodes[j].data.id] + edges[j].data.weight
                }
            }
        }
    }
    // // print routing table for every non infinite cost in routing table
    // for (let j = 0; j < nodes.length; j++) {
    //     let table = routingTable[nodes[j].data.id]
    //     for (let k = 0; k < nodes.length; k++) {
    //         if (table[nodes[k].data.id] !== Infinity) {
    //             console.log(nodes[j].data.id + " " + nodes[k].data.id + " " + table[nodes[k].data.id])
    //         }
    //     }
    // }
    // console.log("\n")
}

// print routing table for every non infinite cost in routing table
for (let j = 0; j < nodes.length; j++) {
    let table = routingTable[nodes[j].data.id]
    for (let k = 0; k < nodes.length; k++) {
        if (table[nodes[k].data.id] !== Infinity) {
            console.log(nodes[j].data.id + " " + nodes[k].data.id + " " + table[nodes[k].data.id])
        }
    }
    console.log("\n")
}
