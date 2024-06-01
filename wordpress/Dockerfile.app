# Diving into docker
FROM python:3.8-alpine

LABEL version="1.0"
WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
COPY app.py app.py
COPY index.html index.html

EXPOSE 514

ENTRYPOINT ["python3", "app.py"]
