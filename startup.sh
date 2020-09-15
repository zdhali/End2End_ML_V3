#!/bin/bash

#Check AWSCLI installation
echo "AWS CLI installed.. "
aws --version


INPUT=new_user_credentials.csv
Username="None"
Accesskey="None"
Secretaccesskey="None"
OLDIFS=$IFS
IFS=','
[ ! -f $INPUT ] && { echo "$INPUT file not found"; exit 99; }
while read username pswd accesskey secretaccesskey loginlink
do
  echo "username : $username"
  Username="$username"
  Accesskey="$accesskey"
  Secretaccesskey="$secretaccesskey"
	# echo "password : $pswd"
	# echo "Accesskey : $accesskey"
	# echo "Saccesskey : $secretaccesskey"
	# echo "loginlink : $loginlink"
done <<< $(sed 1d $INPUT)
IFS=$OLDIFS

echo "configuring : $Username as Default"
# aws configure --profile $Username
aws configure set aws_access_key_id $Accesskey
aws configure set aws_secret_access_key  $Secretaccesskey
aws configure set region us-west-2

aws configure list


#Open Jupyter Notebook
echo "Opening Jupyter Notebook..."
jupyter notebook --port=8888 --no-browser --ip=0.0.0.0 --allow-root
