# Load libraries
import flask
import json
import requests
from keras.models import load_model, model_from_json
from base64 import b64decode
from PIL import Image
from io import BytesIO
from numpy import asarray, min, ptp, argmax

# instantiate flask 
app = flask.Flask(__name__)

with open('../../models/mnist_keras_model.json') as f:
    model = f.read()
    model = model_from_json(model)
    model.load_weights("../../models/mnist_keras_model.h5")
    model.compile()

# define a predict function as an endpoint 
@app.route("/predict", methods=["POST"])
def predict():
    data = {"success": False}

    content = flask.request.json

    number = content["data"]

    if number is None:
        return flask.jsonify({"success": False, "error": "No input"})

    try:
        header, encoded = number.split(",", 1)
        data = b64decode(encoded)

        with open("image.png", "wb") as f:
            f.write(data)
            
        image = Image.open('image.png')
        image = image.resize((28, 28))
        image_data = asarray(image)[:,:,3]
        image_data = image_data.flatten()
        number = (image_data - min(image_data))/ ptp(image_data)
        number = number.reshape((1, 28,28, 1))
    except:
        return flask.jsonify({"success": False, "error": "Failed to parse data."})

    predictions = model.predict(number)
    max_accuracy = max(predictions[0])
    most_likely = argmax(predictions[0])

    predictions = [float(x) * 100 for x in predictions[0]]

    return flask.jsonify({"success": True, "prediction": int(most_likely), "predictions": predictions}) 

@app.route("/", methods=["GET"])
def root_route():
    return flask.jsonify(success=True)

# start the flask app, allow remote connections 
app.run(host='0.0.0.0', debug=True)
