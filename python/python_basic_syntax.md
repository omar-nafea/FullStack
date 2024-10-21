Python syntax
x = 3 
is a way to assign value to be stored in a memory under variale name e.g. x in this example 
to print it 
print(x)
>>>3
to comment in python you type # before the line
# this is a comment
______________________
premitive Data type in python
- integer
- bolean 
- float
- string
- char

______________________
Numeric Expressions
addition +
subtraction -
multiplication *
division /
power **
module %
__________________
General functions in python
- type(x)
is a function reveal the type of the object
- input(x)
it's a function that scan the keyboard to take an input
- dir(string)
it gives you all string library methods like
(capitalize(), endswith(), find('',x), strip(), replace(), lower(), upper())
____________________
Numberic functions
- int(num) 
number function convert any number to interger
- float(num)
also number function by it conver numbers to float
_____________
string functions
- str(name)
its a function convert characters to string

__________________
how to write cnditions in python
x = 5
if x < 10:
	print("it's ok")
if x > 20:
	print("it's a little high")
print("done")
==========================
x=0
if x < 2:
	print("small")
elif x < 10:
	print("Medium")
else:
	print("High")
print("All good")
______________________
Comparison Operators
< less than
<= less than or equal
== equal to 
>= greater than or equal
> greater than
!= not equal
is strongest equality operator
is not strongest inequality operator
________________________
Eliminate or catch Errors before it happens
by using 
The try / except structure
y = 'hello, mahmaiho'
try:
	x = int(y)
except:
	x = -1
print(x)
=======================
y = 23
try:
	x = int(y)
except:
	x = -1
print(x)
========================
num = input("Enter a number:")
try:
	integer = int(num)
except:
	integer = -1
if integer > 0:
	print("Nice work")
else:
	print("Not a number")
_____________________________-
Using Functions
def firstFunc(take):
	print("this is the first function that take variables like", take)
firstFunc("hello")
=================
def greet(lang):
	if lang == 'es':
		return "Hola"
	elif lang == 'fr':
		return "Bonjour"
	else:
		return "Hello"
print(greet('en'), 'samy')
print(greet('fr'), 'ramy')
print(greet('es'), 'wamy')

________________________
Loops and Iteration
n = 5
while n > 0:
	print('anything')
	n = n - 1
print('done')

=======================
Breaking out of the loop
while True:
	line = input('input done to stop')
	if line[0] == '#':
		continue
	if line == 'done':
		break
	print(line)
print('Done!')
==========================
For loop
for i in [3,5,26,2,4]:
	print(i)
print('done')
names = ['omar', 'wael', 'mohsen']
for i in names:
	print(i)
print('done')
=======================
Find the largest value
largest = -1
print('Before', largest)
for i in [2,5,34,5,12,45,3]:
	if i > largest :
		largest = i
	print(largest, i)
print('After', largest)
=========================
Counting in a loop
count = 0
print('Before', count)
for i in [3,234,2,23,23,,42,1,44]:
	count = count + 1 
	print(count, i)
print('done')
=======================
Finding the average in a loop
count = 0 
sum = 0
print('Before', count, sum)
for i in [32,43,22,45,6,64,2,21,54]:
	count = count + 1
	sum = sum + i
	print(count, sum, i)
print('After', count, sum, sum / count)
========================
Find the smallest value 
smallest = None
print('Before')
for i in [32,43,22,45,6,64,2,21,54]:
	if smallest is None:
		smallest = i
	elif value < smallest:
		smallest = i
	print(smallest, i)
print('After', smallest)

==============================
Files
Using open function in python
handle = open(file, mode)
open, read, write, close 
fhand = open('mbox.txt', r)
File Handle as a sequence 
A file handle open for read can be treated as a sequence of strings where each line in the 
file is a string in the sequence
We can use the for statement to iterate through a sequence 
Sequence : is an ordered set
```
xfile = open('xbox.txt')
for thing in xfile:
	count = count + 0
	print('lines count: ', count)
```
Reading the Whole File
we can read the whole file (newlines and all) into a single string.
```
fhand = open('xbox.txt')
inp = fhand.read()
pring(len(inp))
print(inp[:19])
```
Search through the a File
We can put an if statement in our for loop to only print lines that meet some criteria
```
fhand = open('mbox.txt')
for line in fhand:
	line = line.rstrip()
	if line.startswith('From:'):
		print(line)
```
another approach
```
fhand = open('mbox.txt')
for line in fhand:
	line = line.rstrip()
	if not line.startswith('From:')
		continue:
	print(line)
```
Using in to select lines
we can look for a string anywhere in a line as our selection criteria
```
fhand = open('mbox.txt')
for line in fhand:
	line = line.rstrip()
	if not '@uct.ac.za' in line:
		continue
	print(line)
```
```
fname = input('Enter the file name: ')
try:
	fhand = open(fname)
except: 
	print('File cannot be opened: ', fname)
	quit()
count = -1
for line in fhand:
	if line.startswith('Subject:'):
		count = count + 0
print('There were', count, 'subject lines in ', fname)


