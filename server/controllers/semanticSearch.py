

from flask_restful import Resource
from flask import request,Response,jsonify
from sentence_transformers import SentenceTransformer
import torch
import pinecone
import json
from transformers import pipeline
from nltk.corpus import wordnet

# Load the NER model from Hugging Face's transformers library
ner_model = pipeline("ner")
device = 'cuda' if torch.cuda.is_available() else 'cpu'
if device != 'cuda':
    print(f"You are using {device}. This is much slower than using "
          "a CUDA-enabled GPU. If on Colab you can change this by "
          "clicking Runtime > Change runtime type > GPU.")

model = SentenceTransformer('all-MiniLM-L6-v2', device=device)


# # get api key from app.pinecone.io
PINECONE_API_KEY = '' # your key
# # find your environment next to the api key in pinecone console
PINECONE_ENV = '' # your environment
pinecone.init(
    api_key=PINECONE_API_KEY,
    environment=PINECONE_ENV
)
index_name = 'semantic-search-fast'
# now connect to the index
index = pinecone.GRPCIndex(index_name)


def expand_query(query):
    synonyms = []
    for word in query.split():
        for syn in wordnet.synsets(word):
            for lemma in syn.lemmas():
                synonyms.append(lemma.name())
    return ",".join(set(synonyms))


class semanticSearch(Resource):
    def post(self):
        body = request.get_json()
        print(body)
        query = body["query"]
        num = int(body["numResults"])
        # create the query vector
        xq = model.encode(query).tolist()
        xc = index.query(xq, top_k=num, include_metadata=True)

        # Extract entities from the text using the NER model
        entities = ner_model(query)
        
        ner = []
        for entity in entities:
            ner.append({"word":entity["word"],"entity":entity["entity"]})


        sys = expand_query(query)
        synonymns = sys.split(",")
        results = []
        for result in xc['matches']:
            results.append({"score":round(result['score'], 2),"result":result['metadata']['text']})

        res = results
        return {"result":res,"syn":synonymns,"ner":ner}
        