# import socket

# mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# mysock.connect(('data.pr4e.org', 80))
# cmd = 'GET http://data.pr4e.org/intro-short.txt HTTP/1.0\r\n\r\n'.encode()
# mysock.send(cmd)

# while True:
#     data = mysock.recv(512)
#     if len(data) < 1:
#         break
#     print(data.decode(),end='')

# mysock.close()


# Network Programs
# import urllib.request, urllib.parse, urllib.error
# from bs4 import BeautifulSoup
# import ssl

# # Ignore SSL certificate error
# ctx = ssl.create_default_context()
# ctx.check_hostname = False
# ctx.verify_mode = ssl.CERT_NONE


# url = input('Enter - ')
# html = urllib.request.urlopen(url, context=ctx).read()
# soup = BeautifulSoup(html, 'html.parser')



# Retrieve all of the anchor tags
# tags = soup('a')
# for tag in tags:
# 	print(tag.get('href', None)) 



# Summary
# the TCP/IP give us pipes / sockets between applications
# we designed application protocols to make use of these pipes 
# HeperText Trasfer Protocol (HTTP) is a simple yet powerful protocol 
# Python has good support for sockets, HTTP, and HTML parsing
# the purpose of XML Schema To establish a contract as to what is valid XML
# <xs:complexType name=”person”>
#   <xs:sequence>
#     <xs:element name="lastname" type="xs:string"/>
#     <xs:element name="age" type="xs:string"/>
#     <xs:element name="dateborn" type="xs:date"/>
#   </xs:sequence>
# </xs:complexType>
# <person>
#    <lastname>Severance</lastname>
#    <Age>17</Age>
#    <dateborn>2001-04-17</dateborn>
# </person>
# # Web services
# import xml.etree.ElementTree as ET
# input = '''<stuff>
# 	<user>
# 		<user x="2">
# 			<id>001</id>
# 			<name>Chuck</name>
# 		</user>
# 		<user x="7">
# 			<id>009</id>
# 			<name>Brent</name>
# 		</user>
# 	</user>
# </stuff>'''

# stuff = ET.fromstring(input)
# st = stuff.fidall('users/user')
# print('User count:', len(lst))
# for item in lst:
# 	print('Name', item.find('name').text)
# 	print('Id', item.find('id').text)
# 	print('Attribute', item.get("x"))

import json
import ssl
import urllib.request
import urllib.parse
# data = '''
# [
#   { "id" : "001",
#     "x" : "2",
#     "name" : "Chuck"
#   } ,
#   { "id" : "009",
#     "x" : "7",
#     "name" : "Brent"
#   }
# ]'''
# ctx = ssl.create_default_context()
# ctx.check_hostname = False
# ctx.verify_mode = ssl.CERT_NONE
# url = 'http://py4e-data.dr-chuck.net/comments_1932475.json'
# uh = urllib.request.urlopen(url, context=ctx)
# data = uh.read().decode()
# # print(data)
# try:
#     js = json.loads(data) 
# except: 
#     js = None


# array = list()
# for i in js['comments']:
#     array.append(i['count'])
# print(sum(array))
    

import urllib.request, urllib.parse
import json, ssl

# Heavily rate limited proxy of https://www.geoapify.com/ api
serviceurl = 'https://py4e-data.dr-chuck.net/opengeo?'

# Ignore SSL certificate errors
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
        print('==== Download error ===')
        print(data)
        break

    if len(js['features']) == 0:
        print('==== Object not found ====')
        print(data)
        break

    # print(json.dumps(js, indent=4))

    lat = js['features'][0]['properties']['lat']
    lon = js['features'][0]['properties']['lon']
    print('lat', lat, 'lon', lon)
    location = js['features'][0]['properties']['formatted']
    print(location)




