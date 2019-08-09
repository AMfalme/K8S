FROM python:3

RUN ["mkdir", "/var/log/home"]
RUN ["mkdir", "/opt/home"]

WORKDIR /opt/home

ADD . /opt/home




# Install pip requirements

RUN ["pip3", "install", "--upgrade", "pip"]
RUN ["pip3", "install","-r", "requirements.txt"]


RUN ["python3", "WebSystem/manage.py", "collectstatic"]
#VOLUME /opt/home

EXPOSE 8000



CMD ["python3", "WebSystem/manage.py", "runserver", "0.0.0.0:8000"]