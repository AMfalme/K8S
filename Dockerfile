FROM ubuntu:16.04

RUN apt-get update -y  && apt-get install -y \
            python3 python3-dev python3-pip libmysqlclient-dev iputils-ping

RUN ["mkdir", "/var/log/home"]
RUN ["mkdir", "/opt/home"]

WORKDIR /opt/home

ADD . /opt/home




# Install pip requirements

RUN ["pip3", "install", "--upgrade", "pip"]
RUN ["pip3", "install","-r", "requirements.txt"]


RUN ["python3", "WebSystem/manage.py", "collectstatic"]
#VOLUME /opt/home

EXPOSE 80
CMD ["python3", "WebSystem/manage.py","runserver", "0:8800"]
