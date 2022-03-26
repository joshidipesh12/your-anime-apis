import sys
from tensorflow.keras.preprocessing.image import load_img, img_to_array, array_to_img
from tensorflow.keras.models import Model, load_model
import numpy as np
import pandas as pd
import pickle

# Calculate eucledian distance
img_width = img_height = 64

# importing model
autoencoder = load_model('model_ep_1.h5', compile=False)
embeddings = pickle.load(open('image_embeddings_ep_1.pickle', 'rb'))
latent_space_model = Model(autoencoder.input,
                           autoencoder.get_layer('latent_space').output)


# Get actual image embedding
img_name = sys.argv[1]
img = load_img(f"{img_name}", target_size=(img_width, img_height))
img = img_to_array(img) / 255.0
img = np.expand_dims(img, axis=0)
pred = latent_space_model.predict(img)
pred = np.resize(pred, (16))


def eucledian_distance(x, y):
    eucl_dist = np.linalg.norm(x - y)
    return eucl_dist


# calculating result
img_similarity = []
for i in range(len(embeddings['indices'])):
    img_name = embeddings['indices'][i]

    # Calculate vectors distances
    dist = eucledian_distance(pred, embeddings['features'][i])
    img_similarity.append(dist)

imgs_result = pd.DataFrame(
    {'img': embeddings['indices'], 'euclidean_distance': img_similarity})

imgs_result = imgs_result.query('euclidean_distance > 0').sort_values(
    by='euclidean_distance', ascending=True).reset_index(drop=True)

# stdout imgs_result
if(len(imgs_result['img']) > 0):
    print(imgs_result['img'].values[0], end="")
else:
    print("13307_result.jpg", end="")
