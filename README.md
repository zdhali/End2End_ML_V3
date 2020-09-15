E2E_ML_project_v3
==============================

The goal of this project is to use a cookiecutter format to develop a machine learning development and deployment environment. This project will be dockerized and pushed to github for easy reproduction of the model. 

This document outlines the setup of a ML development environment that is customizable for the problem/solution needs and create a skeleton for deployment on AWS using Sagemaker. The container built here will have tensorflow, AWS CLI, and Sagemaker as its main packages, open Jupyter notebook for model development. 

Installation Requirements: 
The following packages are required on the machine to get started: 

Git - Version Management - https://git-scm.com/book/en/v2/Getting-Started-Installing-Git 
	* Github Desktop could also be used


Anaconda - Package Manager - https://docs.anaconda.com/anaconda/install
	* Please note: The steps outlined below do not use Anaconda explicitly: This is to manage your local packages if just using cookie cutter on your local host environment.


Cookie Cutter - https://cookiecutter.readthedocs.io/en/1.7.2/installation.html 
	* Cookiecutter has Sphinx documentation needs built into the format. However, the code in the Jupyter Notebooks in this demo is not written in Object Oriented form, the Sphinx documentation capabilities have not been leveraged. 


Docker - Containerized Environment Ecosystem- https://www.docker.com/products/docker-desktop 

Getting Started: 
Git
Clone the repository located here: 
This repository has all the docker components needed to create a base container for development and has sample notebooks for worked out examples. 

$ git clone 

Change working directory to the cloned project folder directory. 
A list of file contents would look like so:

'.env',
'.gitignore',
'data',
'docker-compose.yml',
'Dockerfile',
'docs',
'LICENSE',
'Makefile',
'models',
'new_user_credentials.csv',
'notebooks',
'README.md',
'references',
'reports',
'requirements.txt',
'setup.py',
'src',
'startup.sh',
'test_environment.py',
'tox.ini'
 
AWS
You will need an AWS account to be able complete this tutorial: 
	1. Go to AWS IAm : https://aws.amazon.com/iam/
	2. Sign into the Console and create a new user with full Sagemaker and S3 access. 
	3. Save the User credential CSV in the project directory with the dockerfile and docker-compose.yml. 

		1. (If not named new_user_credentials.csv , modify the filename in the startup.sh file to your CSV name)
	4. Create a role with "AmazonSagemakerFullAccess" policy

		1. Keep the name of this role handy to use in Jupyter Notebook : The notebook will prompt you for this name 




Docker
We will now build the docker image needed: 
For more detailed understanding of Docker, see the Docker 101 Documentation. 

Check Documentation-ZD/Documentation Machine Learning.html for changes that may be needed to the files


	* To build the docker image: 



$docker-compose build 


		* Note: The building image may take time. Tensorflow installation with dependencies is a large installation. 



	* Once docker image has been built you may check the image with:



$docker images

	* To run the container:



$docker-compose up 


	* The ml_development image will be instantiated, the startup.sh will print your AWS CLI version,  log you into AWS CLI, list your partial credentials and open Jupyter notebook. 



	* Navigate to localhost:8888 or use one of the links in CMD output in a browser to open Jupyter notebook. 
	* Copy paste the token from the CMD output if prompted. 



In Jupyter Notebooks navigate to the notebooks folder for a two sample notebooks. 
	1. The online version is to be used if trying to create an online Sagemaker notebook instance. This requires no local installation and all steps to instantiate are outlined in the AWS- SageMaker-Online Notebook documentation. 
	2. The local version is to be used if trying to create a local notebook but run training/deployment on AWS EC through Sagemaker

		1. This notebook outlines 

			* creating a model, training and deployment through Python SDK 
			* creating a model, training and deployment through Boto3
			* Uploading a custom model into Sagemaker and deployment 

				* 
Note: This shows how a custom Keras model can be used in Sagemaker but the model predictions are invalid as the input is not processed in the same way as the model was initially trained





Resources:</span></div><div style="text-align: left;"><span style="font-style: italic;">Note: Resources listed are good starting points for layout and framework but the details of the code or calls may change with versions and upgrades over time. It is best to use these as a springboard for what to exactly look for in a Google search. Look for most recent/up to date resources for further information. </span></div><div style="text-align: left;"><br/></div><div style="text-align: left;"><span style="font-style: italic;"><span style="font-style: italic; color: rgb(255, 0, 0); font-weight: bold;">Read</span> - content to read for background </span></div><div style="text-align: left;"><span style="font-style: italic;"><span style="font-style: italic; color: rgb(250, 122, 0); font-weight: bold;">Youtube</span> - videos to establish understanding/ demos </span></div><div style="text-align: left;"><span style="font-style: italic;"><span style="font-style: italic; color: rgb(77, 206, 29); font-weight: bold;">Documentation</span> - official documentation</span></div><div style="text-align: left;"><span style="font-style: italic;"><span style="font-style: italic; color: rgb(65, 173, 28); font-weight: bold;">Documentation + Code</span> - worked out examples of code flow </span></div><div style="text-align: left;"><br/></div><ul style="text-align: left;"><li><div><span style="font-style: italic; font-weight: bold;">Sagemaker </span></div></li><ul><li><div><a href="https://mlinproduction.com/sagemaker-architecture/" style="font-style: italic; font-weight: bold;">Deploying Models on AWS SageMaker – Part 1 Architecture </a><span style="font-style: italic; font-weight: bold;">- Sagemaker AWS components Summary (</span><span style="color: rgb(255, 0, 0); font-style: italic; font-weight: bold;">Read</span><span style="font-style: italic; font-weight: bold;">) </span></div></li><li><div><a href="https://www.youtube.com/watch?v=R0vC31OXt-g" style="font-style: italic; font-weight: bold;">Build, Train and Deploy Machine Learning Models on AWS with Amazon SageMaker - AWS Online Tech Talks</a><span style="font-style: italic; font-weight: bold;"> - Guide to Using Sagemaker Notebooks Online (</span><span style="color: rgb(250, 122, 0); font-style: italic; font-weight: bold;">Youtube</span><span style="font-style: italic; font-weight: bold;">) </span></div></li><li><div><br/></div></li></ul><li><div><span style="font-style: italic; font-weight: bold;">Sagemaker Official Docs: </span></div></li><ul><li><div><a href="https://docs.aws.amazon.com/sagemaker/latest/dg/gs-console.html" style="font-style: italic; font-weight: bold;">Get Started with Amazon SageMaker Notebook Instances and SDKs</a><span style="font-style: italic; font-weight: bold;"> - MNIST dataset example - See AWS Online Tutorial for written summary of content (</span><span style="color: rgb(77, 206, 29); font-style: italic; font-weight: bold;">Documentation</span><span style="font-style: italic; font-weight: bold;">)</span></div></li><li><div><a href="https://awscli.amazonaws.com/v2/documentation/api/latest/reference/sagemaker/index.html#cli-aws-sagemaker" style="font-style: italic; font-weight: bold;">Sagemaker AWS CLI v2 Documentation </a><span style="font-style: italic; font-weight: bold;"> - A</span><span style="font-style: italic; font-weight: bold;">PIs for creating and managing Amazon SageMaker resources (</span><span style="color: rgb(77, 206, 29); font-style: italic; font-weight: bold;">Documentation</span><span style="font-style: italic; font-weight: bold;">) </span></div></li><li><div><a href="https://aws.amazon.com/blogs/machine-learning/bring-your-own-pre-trained-mxnet-or-tensorflow-models-into-amazon-sagemaker/" style="font-style: italic; font-weight: bold;">Bring your own pre-trained MXNet or TensorFlow models into Amazon SageMaker</a><span style="font-style: italic; font-weight: bold;"> - Load a prebuilt cluster on Sagemaker (</span><span style="color: rgb(65, 173, 28); font-style: italic; font-weight: bold;">Documentation + Code</span><span style="font-style: italic; font-weight: bold;">) </span></div></li><li><div><a href="https://aws.amazon.com/blogs/machine-learning/deploy-trained-keras-or-tensorflow-models-using-amazon-sagemaker/" style="font-style: italic; font-weight: bold;">Deploy trained Keras or TensorFlow models using Amazon SageMaker</a><span style="font-style: italic; font-weight: bold;"> - Load a Keras Model on Sagemaker : Demonstrated in Local Notebook  (</span><span style="color: rgb(65, 173, 28); font-style: italic; font-weight: bold;">Documentation + Code</span><span style="font-style: italic; font-weight: bold;">) </span></div></li><li><div><a href="https://docs.aws.amazon.com/sagemaker/latest/dg/endpoint-auto-scaling.html" style="font-style: italic; font-weight: bold;">Automatically Scale Amazon SageMaker Models</a><span style="font-style: italic; font-weight: bold;"> - How to set instances to autoscale on Sagemaker Models for AWS CLI and in Console (</span><span style="color: rgb(65, 173, 28); font-style: italic; font-weight: bold;">Documentation + Code)</span></div></li></ul></ul><div style="text-align: left;"><br/></div><ul style="text-align: left;"><li><div><span style="font-style: italic; font-weight: bold;">Model to Cloud Methods</span></div></li><ul><li><div><a href="https://towardsdatascience.com/simple-way-to-deploy-machine-learning-models-to-cloud-fd58b771fdcf" style="font-style: italic; font-weight: bold;">Simple way to deploy machine learning models to cloud</a><span style="font-style: italic; font-weight: bold;">  - Create Containerized Flask service and deploy to EC2 (</span><span style="color: rgb(65, 173, 28); font-style: italic; font-weight: bold;">Documentation + Code</span><span style="font-style: italic; font-weight: bold;">) </span></div></li><li><div><a href="https://www.youtube.com/watch?v=-UYyyeYJAoQ&amp;t=1816s" style="font-style: italic; font-weight: bold;">How to deploy machine learning models into production</a><span style="font-style: italic; font-weight: bold;"> - V</span><span style="font-style: italic; font-weight: bold;">arious possibilities and best practices to bring machine learning models into production environments (</span><span style="color: rgb(250, 122, 0); font-style: italic; font-weight: bold;">Youtube</span><span style="font-style: italic; font-weight: bold;">) </span></div></li><li><div><br/></div></li></ul><li><div><span style="font-style: italic; font-weight: bold;">Docker </span></div></li><ul><li><div><a href="https://www.youtube.com/watch?v=fqMOX6JJhGo" style="font-style: italic; font-weight: bold;">Docker Tutorial for Beginners - A Full DevOps Course on How to Run Applications in Containers</a><span style="font-style: italic; font-weight: bold;"> - Full course on Docker - See Docker Document for written summary of content (</span><span style="color: rgb(250, 122, 0); font-style: italic; font-weight: bold;">Youtube</span><span style="font-style: italic; font-weight: bold;">)</span></div></li><li><div><a href="https://www.youtube.com/watch?v=7-7p6WuDtbs" style="font-style: italic; font-weight: bold;">Why You Need to Containerize Machine Learning Models</a><span style="font-style: italic; font-weight: bold;"> - Intro to Docker and how to use for containerized ML (</span><span style="color: rgb(250, 122, 0); font-style: italic; font-weight: bold;">Youtube</span><span style="font-style: italic; font-weight: bold;">) </span></div></li><li><div><a href="https://www.youtube.com/watch?v=Qw9zlE3t8Ko" style="font-style: italic; font-weight: bold;">Docker Compose in 12 Minutes</a><span style="font-style: italic; font-weight: bold;"> - Docker compose 101 - Quick Explanation (</span><span style="color: rgb(250, 122, 0); font-style: italic; font-weight: bold;">Youtube</span><span style="font-style: italic; font-weight: bold;">) </span></div></li></ul></ul><div style="text-align: left;"><br/></div><div><br/></div></div><div><br/></div></span>
</div>


Project Organization
------------

    ├── LICENSE
    ├── Makefile           <- Makefile with commands like `make data` or `make train`
    ├── README.md          <- The top-level README for developers using this project.
    ├── data
    │   ├── external       <- Data from third party sources.
    │   ├── interim        <- Intermediate data that has been transformed.
    │   ├── processed      <- The final, canonical data sets for modeling.
    │   └── raw            <- The original, immutable data dump.
    │
    ├── docs               <- A default Sphinx project; see sphinx-doc.org for details
    │
    ├── models             <- Trained and serialized models, model predictions, or model summaries
    │
    ├── notebooks          <- Jupyter notebooks. Naming convention is a number (for ordering),
    │                         the creator's initials, and a short `-` delimited description, e.g.
    │                         `1.0-jqp-initial-data-exploration`.
    │
    ├── references         <- Data dictionaries, manuals, and all other explanatory materials.
    │
    ├── reports            <- Generated analysis as HTML, PDF, LaTeX, etc.
    │   └── figures        <- Generated graphics and figures to be used in reporting
    │
    ├── requirements.txt   <- The requirements file for reproducing the analysis environment, e.g.
    │                         generated with `pip freeze > requirements.txt`
    │
    ├── setup.py           <- makes project pip installable (pip install -e .) so src can be imported
    ├── src                <- Source code for use in this project.
    │   ├── __init__.py    <- Makes src a Python module
    │   │
    │   ├── data           <- Scripts to download or generate data
    │   │   └── make_dataset.py
    │   │
    │   ├── features       <- Scripts to turn raw data into features for modeling
    │   │   └── build_features.py
    │   │
    │   ├── models         <- Scripts to train models and then use trained models to make
    │   │   │                 predictions
    │   │   ├── predict_model.py
    │   │   └── train_model.py
    │   │
    │   └── visualization  <- Scripts to create exploratory and results oriented visualizations
    │       └── visualize.py
    │
    └── tox.ini            <- tox file with settings for running tox; see tox.readthedocs.io


--------

<p><small>Project based on the <a target="_blank" href="https://drivendata.github.io/cookiecutter-data-science/">cookiecutter data science project template</a>. #cookiecutterdatascience</small></p>
