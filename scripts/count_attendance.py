#   GSS Attendance Counter, by Will Hoffer
#
#   This script will read the GSS Sign-In spreadsheet and count unique attendance for each day.
#       - Enables using the same sign-in link for each day
#       - Note that this sorts by day, not by week. 
#         Stragglers signing in on the wrong day must be manually combined, though this is rare.
#
#   To use this script, place the file named "GSS_Sign_In.xlsx" in the same directory as this script and run.
#   It will output the day-count data as a spreadsheet called "attendee_counts.xlsx".
#

import pandas as pd

def count_unique_people(filename):
    # Load the Excel spreadsheet
    df = pd.read_excel(filename)
    
    # Convert the first column to datetime format and extract only the date
    df.iloc[:, 0] = pd.to_datetime(df.iloc[:, 0]).dt.date
    
    # Initialize a dictionary to store counts for each date
    date_counts = {}
    
    # Iterate through each row in the dataframe
    for index, row in df.iterrows():
        date = row.iloc[0]  # Date is in the first column
        person = row.iloc[1]  # Person is in the second column
        
        # If the date is not in the dictionary, add it
        if date not in date_counts:
            date_counts[date] = set()  # Use a set to store unique people
        
        # Add the person to the set for that date
        date_counts[date].add(person)
    
    # Print the counts for each date
    for date, people in date_counts.items():
        print(f"On {date}, there are {len(people)} unique people.")

    # Create a new DataFrame for storing the counts
    result_df = pd.DataFrame(columns=['Date', 'Number of Attendees'])
    for date, people in date_counts.items():
        result_df = result_df._append({'Date': date, 'Number of Attendees': len(people)}, ignore_index=True)
    
    # Save the result to an Excel file
    result_df.to_excel('attendee_counts.xlsx', index=False)

# Replace 'example.xlsx' with the path to your Excel file
count_unique_people('GSS_Sign_In.xlsx')