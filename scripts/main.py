from fastapi import FastAPI
from get_love import get_love

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8080",
    "http://192.168.15.6:19006",
    "http://localhost:19006",
    "http://192.168.15.9",
    "http://0.0.0.0"

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
    
    data=get_love()
    print(data)

    return str(data)