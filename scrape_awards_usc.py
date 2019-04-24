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

            d[headings[idx]] = td.get_text().strip()
        awards.append(d)

with open('awardsdatabase_usc.json', 'w') as f:
    json.dump(awards, f)
