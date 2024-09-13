#   GSS Talk Data Collector, by Will Hoffer
#
#   This script will read the GSS website and collect the speaker, day, title, and abstract for each listed talk.
#
#   Website entries must be entered according to the template format below for this to work.
#       <article id="lastName" class="talk">
#         <h4>Date</h4>
#         <h3>Title</h3>
#         <p class="author">Speaker</p>
#         <p class="abstract">Abstract</p>
#       </article>
#
#   To use this script, replace the url 
#       "https://ams-at-ucr.github.io/gradsem/years/202X-202Y/" 
#   with the appropriate url for the current year and run.
#   It will output the data as a spreadsheet called "gss_info.xlsx".
#

import requests
from bs4 import BeautifulSoup
import pandas as pd

def scrape_website(url):
    # Send a GET request to the website
    response = requests.get(url)
    
    # Parse the HTML content
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # Initialize lists to store the extracted information
    titles = []
    abstracts = []
    dates = []
    speakers = []
    
    # Extract information from each article
    for article in soup.find_all('article', class_='talk'):

        # Ignore the upcoming talk, which is a duplicate
        if article.get('id') == 'upcoming':
            continue

        # Extract date from h4 tag
        date = article.find('h4').text.strip()
        
        # Extract title from h3 tag
        title = article.find('h3').text.strip()
        
        # Extract speaker from p tag with class "author"
        speaker = article.find('p', class_='author').text.strip()
        
        # Extract abstract from p tag with class "abstract"
        abstract = article.find('p', class_='abstract').text.strip()
        
        # Append extracted information to lists
        titles.append(title)
        abstracts.append(abstract)
        dates.append(date)
        speakers.append(speaker)
    
    # Create a DataFrame to store the information
    df = pd.DataFrame({
        'Speaker': speakers,
        'Date': dates,
        'Title': titles,
        'Abstract': abstracts
    })
    
    # Save the DataFrame to an Excel file
    df.to_excel('gss_info.xlsx', index=False)

# URL of the website to scrape
url = 'https://ams-at-ucr.github.io/gradsem/years/2023-2024/'
scrape_website(url)