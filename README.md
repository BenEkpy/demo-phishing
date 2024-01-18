<h3 align="center">Demo Phishing</h3>

## About Project

Web application to simulate O365 phishing site using Python Flask.

The login page reuse some assets from the official login page of Microsoft Online (image, script, css, objects etc) :

<img align="center" src="img/login.png" height="500">

Once credentials submitted, they are shown into a small web page :

<img align="center" src="img/phishing.png" height="500">


## Getting Started with Docker

#### Container deployment 

```
docker run -d -p 80:80 benkpy/phishing:v1
```

#### Test

You can test access to the application by using http://127.0.0.1

