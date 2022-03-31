import boto3

def gets3data ():

    s3 = boto3.resource('s3')
    bucket = s3.Bucket('loveword')
    # Iterates through all the objects, doing the pagination for you. Each obj
    # is an ObjectSummary, so it doesn't contain the body. You'll need to call
    # get to get the whole body.
    for obj in bucket.objects.all():
        key = obj.key
        body = obj.get()['Body'].read()

    
        
    return body