# Regular Expressions (regex)


^ Matches the beginning of a line
$ Matches the end of the line
. Matches any character
\s Matches whitespace
\S Matches any non-whitespace character
* Repeats a character zero or more times
*? Repeats a character zero or more times (non-greedy)
+ Repeats a character one or more times
+? Repeats a character one or more times (non-greedy)
[aeiou] Matches a single character in the listed set
[^XYZ] Matches a single character not in the listed set
[a-z0-9] The set of characters can include a range
( Indicates where string extraction is to start
) Indicates where string extraction is to end

[^ ] match non-blank character
[^ ]* match all non-blank characters

- Before you can use regular expressions in your program, you must import the library
using "import re"
- you can use re.search() to see if a string matches a regular expression similar to using the find() method for strings
- you can use re.findall() to extract portions of a string that match your regular expression
similar to a combination of find() and slicing: var[5:10] 
---
#Using re.search() like find()
## using find
hand = open('mbox.txt')
for line in hand:
	line = line.rstrip()
	if line.find('From:') >= 0:
		print(line)
---
#Using re.search() like startswith()
## using starts with
hand = open('mbox.txt')
for line in hand:
	line = line.rstrip()
	if line.startswith('From:'):
		print(line)

## using import re
hand = open('mbox.txt')
for line in hand:
	line = line.rstrip()
	if re.search('^From:', line):
# notice here we add ^ symbol to use regular expression 
		print(line)


## using import re
hand = open('mbox.txt')
for line in hand:
	line = line.rstrip()
	if re.search('From:', line):
		print(line)
import re
summing = list()
hand = open('regex_sum.txt')
for line in hand:
        line = line.rstrip()
        numbers = re.findall(r'[0-9]+', line)
        if numbers:
                summing.extend([int(num) for num in numbers])
