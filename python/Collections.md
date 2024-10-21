# List
a list is a kind of collection
a collection allows us to put many values in on variable
startswith()
```
friends = ['Joseph', 'Jonna', 'Sally']
carryOn = ['perfume', 'pen', 'phone']
```
---
friends = ['Joseph', 'Jonna', 'Sally']
for x in friends:
        print('Happy New Year ', x)
---
### Lists Are Mutable
unlike Strings which are immutable - we can not change the contents of a string
we must make a new string to make any change
List on the other hand are mutable which means we can change and element
of a list using the **index** operator
---
x = [35,64,2,62,88,9,1]
x[3] = 12
print(x, len(x))
[35,64,2,12,88,9,1]
---
friends = ['Sarah', 'Sally', 'Soha']
print(list(range(len(friends)))
---
## Lists Methods
['__add__', '__class__', '__class_getitem__', '__contains__', '__delattr__', '__delitem__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__getstate__', '__gt__', '__hash__', '__iadd__', '__imul__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__reversed__', '__rmul__', '__setattr__', '__setitem__', '__sizeof__', '__str__', '__subclasshook__', 'append', 'clear', 'copy', 'count', 'extend', 'index', 'insert', 'pop', 'remove', 'reverse', 'sort']
---
some = [3,5,12,6,43,65]
6 in some
True
12 not in some
False
---
---
fhand = input("Enter File Name")
try:
	fh = open(fhand)
except:
	print("File not valid")
lst = list()
for line in fh:
	words = line.rstrip().split()
	for word in words:
		if word not in lst:
			lst.append(word)
	lst.sort()
print(lst)
---
# Dictionaries
A linear collection of key-value pairs lookup by tag or "key"
cabinet = dict()
cabinet['summer'] = 12
cabinet['fall'] = 21
cabinet['winter'] = 23
cabinet['spring'] = 43
print(cabinet)
{'summer': 12, 'fall': 21, 'winter': 23, 'spring': 43}
cabinet['fall'] =  cabinet['fall'] + 2
print(cabinet)
{'summer': 12, 'fall': 23, 'winter': 23, 'spring': 43}
## Dictionaries Methods
['__class__', '__class_getitem__', '__contains__', '__delattr__', '__delitem__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__getstate__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__ior__', '__iter__', '__le__', '__len__', '__lt__', '__ne__', '__new__', '__or__', '__reduce__', '__reduce_ex__', '__repr__', '__reversed__', '__ror__', '__setattr__', '__setitem__', '__sizeof__', '__str__', '__subclasshook__', 'clear', 'copy', 'fromkeys', 'get', 'items', 'keys', 'pop', 'popitem', 'setdefault', 'update', 'values']

The get Method for Dictionaries
the pattern of checking to see if a key is already in a dictionary and assuming
a default value if the key is not there is so common that there is a method 
called get() that does this for us
> Default value if key does not exist and no Traceback
---
if name in counts:
	x = counts[name]
else: 
	x = 0
x = counts.get(name, 0)
---
---
counts = dict()
names = ['csev', 'cwen', 'scev', 'zqian', 'cwen']
for name in names: 
	counts[name] = counts.get(name, 0) + 1
print(counts)
---
Counting pattern
the general pattern to count the words in a line of text is to split the line into words then
loop through the words and use a dictionary to track the count of each word independently\
---
counts = dict()
print('Enter a line of text: ')
line = input('')
words = line.split()
print('Words:', words)
print('Counting...')
for word in words:
	counts[word] = counts.get(word, 0) + 1
print('Counts', counts)
---
Looping through dictionary
---
counts = {'chuck' : 1, 'fred' : 32, 'jan' : 230}
for key in counts:
	print(key, counts[key])
print(list(counts))
['chuck', 'fred', 'jan']
print(list(counts.keys()))
['chuck', 'fred', 'jan']
print(list(counts.values()))
[1,32,230]
print(list(counts.items()))
[('chuck', 1), ('fred', 32), ('jan', 230)]
---
## Two iteration variables
jjj =  {'chuck' : 1, 'fred' : 32, 'jan' : 230}
for aaa,bbb in jjj.items():
	print(aaa, bbb)
chuck 1
fred 32
jan 230
---
name = input("Enter file:")
if len(name) < 1:
    name = "mbox-short.txt"
handle = open(name)
lst = list()
dic = dict()
bigcount = None
bigaccount = None
for line in handle:
    if not line.startswith('From '):
        continue
    else:
        email = line.split()[1]
        lst.append(email)
for eml in lst:
    dic[eml] = dic.get(eml, 0) + 1
for account,count in dic.items():
    if bigcount is None or count > bigcount:
        bigcount = count
        bigaccount = account
print(bigaccount,bigcount)
---
# Tuple
they are immutable unable to change like strings and unlike lists
since python does not have to build tuple sturctures to be modifiable, they aresimpler and more efficient in term of memory use and performance than lists 
and if you want use data collection temporary and then remove it use tuple 
over list

tuple methods 
['__add__', '__class__', '__class_getitem__', '__contains__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__getnewargs__', '__getstate__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__rmul__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', 'count', 'index']

## Assignments in tuples
--- 
(x, y) = (4, 'fred')
print((x, y))
---
Tuples are comparable
(2,5,6) < (4,23, 7)
it looks for first pair and ignore others if they are the same it goes to 
second pair and so on
---
using sorted()
d = {'b':1, 'c':22, 'a':10}
t = sorted(d.items())
print(t)
[('a', 10), ('b', 1), ('c', 22)]
for k, v in sorted(d.items()):
	print(k, v)
a 10
b 1
c 22
---
how to sort by value
c = {'a': 10, 'b': 1, 'c': 22}
tmp = list()
for k, v in c.items():
	tmp.append((v, k))
print(tmp)
[(10, 'a'), (1, 'b'), (22, 'c')]
tmp = sorted(tmp, reverse=True)
print(tmp)
[(22, 'c'), (10, 'a'), (1, 'b')]
