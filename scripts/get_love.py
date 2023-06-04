import tweepy as tw
from datetime import datetime
import os

#collect twitter keys
TW_KEY=os.environ.get('TW_KEY')
TW_SECRET_KEY=os.environ.get('TW_SECRET_KEY')

def get_love():
    my_api_key = TW_KEY
    my_api_secret = TW_SECRET_KEY

    auth = tw.OAuthHandler(my_api_key, my_api_secret)
    api = tw.API(auth, wait_on_rate_limit=True)

    numtweets=500

    search_query = "love OR liebe OR amore OR amour OR amor OR 爱 OR любов OR любовь OR dashuri OR սեր OR ljubav OR amor OR 爱 OR kasih OR  사랑 -filter:retweets"

    before = datetime.now()
    tweets = tw.Cursor(api.search_tweets,
                    q=search_query).items(numtweets)
    tweet_list=list(tweets)
    after = datetime.now()
    # store the API responses in a list

    deltaT=(after-before).microseconds/1000000+(after-before).seconds

        

    n=0

    final=datetime.now()    
    datadict={"count":numtweets,"max":deltaT}
    #print("Total Tweets fetched:nice",before,after,final,datadict)

    return datadict

