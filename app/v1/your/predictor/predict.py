# from tensorflow.keras.preprocessing.image import load_img, img_to_array, array_to_img
# import numpy as np
# import pickle

# img_width = img_height = 64


# def predict_image(image_dir, autoencoder):
#     raw_image = load_img(image_dir, target_size=(img_width, img_height))
#     image = img_to_array(raw_image)
#     image = np.expand_dims(image, axis=0)
#     image = image / 255.0
#     pred = autoencoder.predict(image)
#     pred = pred * 255.0
#     pred = np.reshape(pred, (img_width, img_height, 3))
#     pred = array_to_img(pred)

#     return raw_image, pred


# def eucledian_distance(x, y):
#     eucl_dist = np.linalg.norm(x - y)
#     return eucl_dist


# autoencoder = load_model('models/model_ep_1.h5', compile=False)
# embeddings = pickle.load(open('image_embeddings_ep_1.pickle', 'rb'))

# latent_space_model = Model(
#     autoencoder.input,
#     autoencoder.get_layer('latent_space').output)

# # Calculate eucledian distance
# img_similarity = []

# # Get actual image embedding
# img_name = 'me.jpg'
# img = load_img(f"./{img_name}", target_size=(img_width, img_height))
# img = img_to_array(img) / 255.0
# img = np.expand_dims(img, axis=0)
# pred = latent_space_model.predict(img)
# pred = np.resize(pred, (16))

# for i in range(len(embeddings['indices'])):
#     img_name = embeddings['indices'][i]

#     # Calculate vectors distances
#     dist = eucledian_distance(pred, embeddings['features'][i])
#     img_similarity.append(dist)

# imgs_result = pd.DataFrame(
#     {'img': embeddings['indices'], 'euclidean_distance': img_similarity})

# imgs_result = imgs_result.query('euclidean_distance > 0').sort_values(
#     by='euclidean_distance', ascending=True).reset_index(drop=True)

# # print(imgs_result)

# print(f"Image Name: {imgs_result['img'].values[0]}")
# image = load_img(
#     '/kaggle/input/another-anime-face-dataset/animefaces256cleaner/{}'.format(imgs_result['img'].values[0]))
# # Show image
# plt.imshow(image)
# plt.show()
# print('Euclidean Distance: {}'.format(
#     imgs_result['euclidean_distance'].values[0]))

print("13307_result.jpg", end="")
