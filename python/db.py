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
	hostname = "https://www.npmjs.com"
	details = ''
	li_url_list = []
	ul_level_list = soup.find_all('ul', class_='search-results') 
	[li_url_list.extend(item.find_all('li')) for item in ul_level_list]
	total_describ_set =set()
	total_detail_set =set()
	for li_str in li_url_list:
		if not li_str.find('a'):
			continue
		details = analysis_single_page_detail(hostname+li_str.find_all("a",{"class":"name"})[0].attrs['href']) 
		total_describ_set.add( li_str.find_all("p",{"class":"description"})[0].text   + " === " + li_str.find_all("a",{"class":"name"})[0].text  + " === " + details )

	codecs.open('total_project_list.txt', mode='ab', encoding='utf-8').writelines([ item+'\n' for item in total_describ_set])
	
def analysis_single_page_detail(pageUrl):
	html = requests.get(pageUrl,timeout=20,verify=False).text
	soup = BeautifulSoup(html)
	detail = ''
	div_readme_list = soup.find_all('div',{"id":"readme","class":"markdown"})
	div_readme = div_readme_list[0]
	for item in div_readme.find_all("p"):
		detail += item.text
	return detail
	


if __name__ == "__main__":
	analyze_single_page("http://www.npmjs.com/search?q=z")
