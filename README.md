# Routing Visualizer
 
This project aims to visualize the basic algorithms going underneath the routing.
There are 2 categories of Routing Algorithms - 
- Adaptive Algorithms
- Non Adaptive Algorithms
  
## Adaptive Algorithms (Dynamic Routing)
Routing decisions are made and modified based on network traffic and topology.
- Distance Vector Routing (Uses Dijkstra Algorithm) - Distributed Algorithm
- Link State Routing (Uses Bellman Ford Algorithm) - Centralized Algorithm

## Non-Adaptive Algorithms (Static Routing)
No change in the selected routing decisions for transferring data packets from the source to the destination. 
A static routing table is constructed based upon the routing information stored in the routers when the network is booted up and routing decisions are made accordingly which do not change further.
- Shortest Distance
- Flooding

### Shortest Distance Algorithms
- Breadth First Search
- Depth First Search
- A* Search
- Dijkstra's Algorithm
- Bellman Ford Algorithm
- Floyd Warshall Algorithm

> Here we have visualized all of the shortest distance algoorithms as they tend to serve the basic purpose of routing i.e sending packets from one device to other as fast as possible. Even the Adaptive Algorithms make use of Shortest Distance Algorithms, once they are done with calculation of Routing Tables which is the key differentiator between Adaptive and Non Adaptive Algorithms.

