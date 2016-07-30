__author__ = 'jxcjxcjzx'
#coding:utf-8
import os
import re
import time
import codecs
import requests
import simplejson
from bs4 import BeautifulSoup
import string
import sys
reload(sys)
sys.setdefaultencoding( "utf-8" )


def analyze_single_page(pageUrl):
	html = requests.get(pageUrl,timeout=20,verify=False).text
	soup = BeautifulSoup(html)
	newurl = ''
	newcontent = ''
	hostname = "https://www.npmjs.com"
	li_url_list = []
	ul_level_list = soup.find_all('ul', class_='search-results') 
	[li_url_list.extend(item.find_all('li')) for item in ul_level_list]
	total_describ_set =set()
	for li_str in li_url_list:
		if not li_str.find('a'):
			continue
		newurl =  hostname+li_str.find_all("a",{"class":"name"})[0].attrs['href'] 
		newcontent = requests.get(newurl,timeout=20,verify=False).text
		total_describ_set.add( li_str.find_all("p",{"class":"description"})[0].text   + " === " + li_str.find_all("a",{"class":"name"})[0].text  + " === " + newcontent )
	codecs.open('total_project_list.txt', mode='ab', encoding='utf-8').writelines([ item+'\n' for item in total_describ_set])
	

if __name__ == "__main__":
	analyze_single_page("http://www.npmjs.com/search?q=z")
