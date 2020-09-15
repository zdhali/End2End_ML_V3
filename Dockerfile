FROM ubuntu:latest

RUN apt-get update
RUN apt-get install python3 -y
RUN apt-get install python3-pip -y

#Create a cached layer of requirements needed for environment
WORKDIR /home/
ADD ./requirements.txt /home/requirements.txt
RUN pip3 install -r /home/requirements.txt

#Current version of awscli 2.0.47
RUN apt-get install -y curl
RUN apt-get install -y unzip
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64-2.0.47.zip" -o "awscliv2.zip"
RUN unzip awscliv2.zip
USER root
RUN ./aws/install


ADD ./startup.sh /home/startup.sh
RUN chmod +x /home/startup.sh

CMD ["./startup.sh"]
