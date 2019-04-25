#!/usr/bin/python3

import json
import urllib.request
from bs4 import BeautifulSoup

URL = "https://awardsdatabase.usc.edu/app/index.asp"

response = urllib.request.urlopen(URL)
webContent = response.read()

soup = BeautifulSoup(webContent, features="html.parser")
soup.prettify()
# print(soup)
headings = []
awards = []
table = soup.findAll('table')[1]
for idx, tr in enumerate(table.findChildren('tr')):
    if idx == 0:
        for heading in tr.findChildren('th'):
            headings.append(heading.get_text())
    else:
        d = {}
        for idx, td in enumerate(tr.findChildren('td')):
            if idx == 0:
                d["URL"] = "https://awardsdatabase.usc.edu/app/" + td.findChildren('a')[0].get('href')
                detailed = urllib.request.urlopen(d["URL"]).read()

                soup = BeautifulSoup(detailed, features="html.parser")
                soup.prettify()

                description = soup.findAll('table')[0].findNext('p').contents[0].strip()
                description = description.replace('"', '')
                description = description.replace('`', '')
                description = description.replace("'", '')
                description = description.replace("\r", '')
                description = description.replace("\n", '')
                description = description.replace("\\r", '')
                description = description.replace("\\n", '')
                print(description)
                d["Details"] = description


            d[headings[idx]] = td.get_text().strip()
        if "usc students" in d["Demographic"].lower():
            d["usc"] = True
        awards.append(d)

with open('awardsdatabase_usc.json', 'w') as f:
    json.dump(awards, f)
