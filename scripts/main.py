from fastapi import FastAPI
import json

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8080",
    "http://192.168.15.6:19006",
    "http://localhost:19006",
    "http://192.168.15.9",
    "http://www.datandart.com"

]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)





@app.get("/")
def root():
    path = "data.json"

    # Open the file and get
    # the file descriptor associated
    # with it using os.open() method
    fd = open(path)

    data=json.load(fd)

    fd.close
    
    print(data)

    return data