# K8S
This is a replica of a kubernetes cluster setup and containerizing of the django app


1. Make sure docker is installed and run the commands below 


```sh
cd [working directory]
docker build -t [image_name] .
```

2. if you are using minikube for testing, ensure minikube and run the below commands.

```sh
minikube start
kubectl create -f k8s/deployment.yaml
```
3. run the below command to view the k8s objects on the dashboard

```sh
minikube dashboard
```

4. in order to see the django application running, get the node ip address, the nodeport of the cluster is 30006

```sh
minikube ip
```

on your browser visit [ip address]:30006