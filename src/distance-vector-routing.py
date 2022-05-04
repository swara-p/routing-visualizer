class Node(object):
	id = None
	neighbours=[]#stores the ids of neighbour nodes
	distance_vector = []
	neighbours_distance_vector = {}#stores the distance vector of neighbours

	def __init__(self, id):
		self.id = id

	#Initializing the distance vector and finding the neighbours
	def distance_from_neighbours(self,matrix,n):
		self.distance_vector = list(matrix[int(self.id)])
		for i in range(n):
			if self.distance_vector[i]!=0:
				self.neighbours.append(i)
			self.neighbours_distance_vector[str(i)]=[]

	#sending the distance vector to other nodes
	def send_to_neighbours(self,Nodes):
		for i in range(len(self.distance_vector)):
			if(i in self.neighbours):
				(Nodes[i]).neighbours_distance_vector[self.id] = self.distance_vector
				for n in Nodes:
					n.recalculate(Nodes)
	#Calculating the distance vector by considering neighbours' distance vectors
	def recalculate(self,Nodes):
		for key,values in self.neighbours_distance_vector.items():
			for i in range(len(values)):
				if (self.distance_vector[i] > values[i]+self.distance_vector[int(key)] or self.distance_vector[i]==0) and values[i]!=0 and self.distance_vector[int(key)]!=0:
					self.distance_vector[i] = values[i]+self.distance_vector[int(key)]
					self.send_to_neighbours(Nodes)
					

#reading from file
file  = open('input.txt','r+')
rows = file.readlines()
#get number of nodes
number_of_nodes = len(rows)


#string to list
list_rows = []
for row in rows:
	list_rows.append(row.split(','))

#string cells to int cells in matrix
matrix=[]
for i in range(len(list_rows)):
	matrix_row=[]
	for j in range(len(list_rows[i])):
		matrix_row.append(int(list_rows[i][j]))
	matrix.append(matrix_row)

#calculating distance vectors for given matrix
def calculate_distance(matrix):
	Nodes = []
	for i in range(len(matrix)):
		Nodes.append(Node(str(i)))

	for node in Nodes:
		node.distance_from_neighbours(matrix,number_of_nodes)
	for node in Nodes:
		node.send_to_neighbours(Nodes)

	for x in Nodes:
		print(x.distance_vector)


calculate_distance(matrix)


while True:
	if input('enter x to exit or c to change a link:\t') == "x":
		break
	else:
		i = int(input('beginning node:\t'))
		j = int(input('destination:\t'))
		v = int(input('value:\t\t'))
		matrix
		matrix[i][j] = v
		matrix[j][i] = v
		calculate_distance(matrix)