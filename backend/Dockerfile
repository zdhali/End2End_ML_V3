# set base image (host OS)
FROM python:3.8

# set the working directory in the container
WORKDIR /backend/src

# copy the dependencies file to the working directory
COPY backend/requirements.txt .
COPY models/mnist_keras_model.json models/
COPY models/mnist_keras_model.h5 models/

# install dependencies
RUN pip install -r requirements.txt

# copy the content of the local src directory to the working directory
COPY backend/src/ .

# command to run on container start
CMD [ "python", "./server.py" ] 