import json
import os
import json
import random
from math import floor
import time
from gets3data import gets3data

# File path 
path = "C:/Users/jonas/Documents/DataScience/DataArt/Projeto2 - LoveWord/LoveWord/LoveWNode/using-react-hooks-with-d3/public/data/data.json"

#path="/home/ec2-user/LoveWordN/public/data/data.json"

# Open the file and get
# the file descriptor associated
# with it using os.open() method
fd = os.open(path, os.O_RDWR)

s3data=gets3data()



# Number of bytes to be read
n = 50

data=json.loads(s3data)

data['max']=data['count']/data['max']
print('data',data)

# Print the bytes read


for count in range(100):

    s3data=gets3data()
    data=json.loads(s3data)
    data['max']=(data['count']/data['max']/10-floor(data['count']/data['max']/10))*100
    databyte=json.dumps(data).encode('utf8')

    with open(path,'wb') as datafile:
        datafile.write(databyte)
    print(json.dumps(data).encode('utf8'))
    # Prints the current time with a five second difference
    time.sleep(60)