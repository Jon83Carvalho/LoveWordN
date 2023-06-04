import json
import os
import json
import time
from get_love import get_love




# File path 
path = "data.json"



# Open the file and get
# the file descriptor associated
# with it using os.open() method
fd = open('data.json')

#print(fd)
data=json.load(fd)

fd.close

#print('data',data)

# Print the bytes read


while True:

#     s3data=gets3data()
#     data=json.loads(s3data)
     
    data=get_love()
    # print('datafromtwitter',data)
    # print('datafromtwitter-json',json.dumps(data).encode('utf8'))

    with open(path,'wb') as datafile:
         datafile.write(json.dumps(data).encode('utf8'))
#     print(json.dumps(data).encode('utf8'))
    # Prints the current time with a five second difference
    time.sleep(61)