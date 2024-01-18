FROM python:3.9-alpine

COPY ./build/requirements.txt /app/requirements.txt
COPY ./src /app

WORKDIR /app

RUN pip install -r requirements.txt

EXPOSE 80/tcp

ENTRYPOINT [ "python" ]
CMD ["app.py" ]