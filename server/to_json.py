import pandas as pd
data = pd.read_csv("review.csv", sep=",")
print(data.head(2))
with open('review.json', 'w') as f:
    f.write(data.to_json(orient='records', lines=True))
