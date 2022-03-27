import json
import os
import json
import random
from math import floor
import time
from gets3data import gets3data

# File path 
path = "C:/Users/jonas/Documents/DataScience/DataArt/Projeto2 - LoveWord/LoveWord/LoveWNode/using-react-hooks-with-d3/public/data/data.json"
  
  
# Open the file and get
# the file descriptor associated
# with it using os.open() method
fd = os.open(path, os.O_RDWR)
  
s3data=gets3data()


  
# Number of bytes to be read
n = 50
  
# Read at most n bytes 
# from file descriptor fd
# using os.read() method
#readBytes = os.read(fd, n)
#jsondata=readBytes.decode('utf8').replace("'",'"')
#os.close(fd)
#generating new random data
#data=json.loads(jsondata)

data=json.loads(s3data)

data['max']=data['count']/data['max']
print('data',data)
#signal=1
# Print the bytes read


for count in range(100):
 #   signal=-1 if signal==1 else 1
 #   newmax=floor(random.random()*100*signal)
 #   data['max']=0 if data['max']+newmax<0 else data['max']+newmax
    s3data=gets3data()
    data=json.loads(s3data)
    data['max']=data['count']/data['max']
    databyte=json.dumps(data).encode('utf8')
 
    with open(path,'wb') as datafile:
        datafile.write(databyte)
    print(json.dumps(data).encode('utf8'))
    # Prints the current time with a five second difference
    time.sleep(60)
    