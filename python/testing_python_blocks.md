
# cont = True
# while cont:
#     fhand = input("Enter File Name: ")
#     try:
#             fh = open(fhand)
#             cont = False
#     except:
#             print("File not valid")
# lst = list()
# for line in fh:
#         words = line.rstrip().split()
#         for word in words:
#                 if word not in lst:
#                         lst.append(word)
#         lst.sort()
# print(lst)

# cabinet = dict()
# cabinet['summer'] = 12
# cabinet['fall'] = 21
# cabinet['winter'] = 23
# cabinet['spring'] = 43
# print(cabinet)
# {'summer': 12, 'fall': 21, 'winter': 23, 'spring': 43}
# cabinet['fall'] =  cabinet['fall'] + 2
# print(cabinet)
# {'summer': 12, 'fall': 23, 'winter': 23, 'spring': 43}
# counts = dict()
# print('Enter a line of text: ')
# line = input('')
# words = line.split()
# print('Words:', words)
# print('Counting...')
# for word in words:
#         counts[word] = counts.get(word, 0) + 1
# print('Counts', counts)

# jjj =  {'chuck' : 1, 'fred' : 32, 'jan' : 230}
# for aaa,bbb in jjj.items():
#         print(aaa, bbb)

# d = {'b':1, 'c':22, 'a':10}
# t = sorted(d.items())
# print(t)

# for k, v in sorted(d.items()):
#         print(k, v)

# c = {'a': 10, 'b': 1, 'c': 22}
# tmp = list()
# for k, v in c.items():
#         tmp.append((v, k))
# print(tmp)
# tmp = sorted(tmp, reverse=True)
# print(tmp)

# word = 'Flag'
# x = 0
# y = 0

# for i in word:
#     if not i.isupper():
#         x += 1
#     if not i.islower():
#         y += 1

# if word[0].isupper() and word[1:].islower():
#     x = 0

# if x < 1 or y < 1:
#     result = True
# else:
#     result = False

# print(result)


# # Find the largest value
# largest = -1
# print('Before', largest)
# for i in [2,5,34,5,12,45,3]:
#         if i > largest:
#                 largest = i
#         print(largest, i)
# print('After', largest)
# # Find the smallest value 
# smallest = None
# print('Before')
# for i in [32,43,22,45,6,64,2,21,54]:
#         if smallest is None:
#                 smallest = i
#         elif i < smallest:
#                 smallest = i
#         print(smallest, i)
# print('After', smallest)

# # Counting in a loop
# count = 0
# print('Before', count)
# for i in [3,234,2,23,23,42,1,44]:
#         count = count + 1
#         print(count, i)
# print('done')
# # summing up 
# count = 0
# print('Before', count)
# for i in [3,234,2,23,23,42,1,44]:
#         count = count + i
#         print(count)
# print('done')
# # Finding the average in a loop
# count = 0 
# sum = 0
# print('Before', count, sum)
# for i in [32,43,22,45,6,64,2,21,54]:
#         count = count + 1
#         sum = sum + i
#         print(count, sum, i)
# print('After', count, sum, float(sum / count))




# from urllib.request import urlopen
# from bs4 import BeautifulSoup

# # User input
# url = input('Enter URL: ')
# count = int(input('Enter count: '))
# position = int(input('Enter position: '))

# # Repeat the process 'count' times
# for i in range(count):
#     html = urlopen(url).read()
#     soup = BeautifulSoup(html, "html.parser")
    
#     # Retrieve all anchor tags
#     tags = soup('a')
    
#     # Get the tag at the specified position (accounting for zero-based indexing)
#     tag = tags[position - 1]  # The first name is at position 1, so subtract 1 for zero-index
#     # Extract the URL to follow
#     url = tag.get('href', None)
    
#     # Print the name found at this step (for debugging)
#     print(f"Retrieving: {url}")

# # The last name found
# name = tag.text
# print(f"The last name you retrieve is: {name}")

# The <a> tag (anchor tag) differs in each iteration because every time you follow a link, you are navigating to a different webpage. Each webpage has its own set of anchor tags, so when you retrieve the anchor tag at the specified position on the new page, it might be different from the one on the previous page.

# Here's a step-by-step explanation of what happens:

#     Initial Page:
#         You start with a URL provided by the user.
#         You parse this page and retrieve all the anchor (<a>) tags.
#         You select the <a> tag at the specified position (e.g., position 18).
#         You extract the URL from this tag and navigate to it.

#     Subsequent Pages:
#         Now, you are on a new page (because you followed the link).
#         This new page has its own set of anchor tags.
#         Again, you retrieve the anchor tag at the same specified position.
#         This anchor tag will likely point to a different URL than the previous one.

#     Repeating the Process:
#         The process repeats: you navigate to a new page, retrieve the anchor tag at the specified position, follow that link, and continue.
#         Each iteration typically takes you to a new page, where the set of links (anchor tags) may differ from the previous ones.

#     Final Iteration:
#         After the last iteration, the anchor tag at the specified position will point to a URL on the final page.
#         The text associated with this final anchor tag is the name you’re interested in.

# Example Scenario:

#     First Page: You start on page1.html, which has 20 anchor tags. The 18th anchor tag points to page2.html.
#     Second Page: On page2.html, there are 20 anchor tags again, but now the 18th one might point to page3.html.
#     Third Page: You repeat the process until you've followed 7 links, ending up on page8.html.
#     The last anchor tag you retrieve (at position 18 on page8.html) is what you output.

# Each page leads you to a different set of links, so while the position stays constant, the actual content of the <a> tag at that position changes as you navigate through the pages.


        

# # Web services
# import xml.etree.ElementTree as ET
# input = '''<stuff>
#         <users>
#                 <user x="2">
#                         <id>001</id>
#                         <name>Chuck</name>
#                 </user>
#                 <user x="7">
#                         <id>009</id>
#                         <name>Brent</name>
#                 </user>
#         </users>
# </stuff>'''

# stuff = ET.fromstring(input)
# lst = stuff.findall('users/user')
# print('User count:', len(lst))
# for item in lst:
#         print('Name', item.find('name').text)
#         print('Id', item.find('id').text)
#         print('Attribu:te', item.get("x"))
#import urllib.request
#import xml.etree.ElementTree as ET

#url = input('Enter location: ')

#if len(url) < 1 : 
#    url = 'http://py4e-data.dr-chuck.net/comments_42.xml'

#print('Retrieving', url)
#uh = urllib.request.urlopen(url)
#data = uh.read()
#print('Retrieved',len(data),'characters')
#tree = ET.fromstring(data)

#counts = tree.findall('.//count')
#nums = list()
#for result in counts:
   # Debug print the data :)
#    nums.append(int(result.text))
#print(nums)

#print('Count:', len(nums))
#print('Sum:', sum(nums))

import urllib.request, urllib.parse
import json, ssl

serviceurl = 'https://py4e-data.dr-chuck.net/opengeo?'


ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

while True:
	address = input('Enter location: ')
	if len(address) < 1: break
	address = address.strip()
	parms = dict()
	parms['q'] = address
	

	url = serviceurl + urllib.parse.urlencode(parms)

	print('Retrieving', url)
	uh = urllib.request.urlopen(url, context=ctx)
	data = uh.read().decode()
	print('Retrieved', len(data), 'characters', data[:20].replace('\n', ' '))
	try:
		js = json.loads(data)
	except:
		js = None
	if not js or 'features' not in js:
		print('==== Download error ====')
		print(data)
		break
	if len(js['features']) == 0:
		print('==== Object not found ====')
		print(data)
		break
	lat = js['features'][0]['properties']['lat']	
	lon = js['features'][0]['properties']['lon']
	print('lat', lat, 'lon', lon)
	plus_code = js['features'][0]['properties']['plus_code']
	print('plus_code: ', plus_code)
	location = js['features'][0]['properties']['formatted']
	print(location)
