#!/bin/bash
set -e

echo "Building project..."
cd backend
./gradlew clean build
cd ../frontend
ng build

echo "Stopping and cleaning old containers..."
docker stop frontend-app-container backend-app-container
docker rm frontend-app-container backend-app-container

echo "Building docker files..."
docker build -t frontend-app .
docker build -t backend-app ../backend

echo "starting containers..."
docker run -d -p 80:80 --name frontend-app-container frontend-app
docker run -d -p 8080:8080 --name backend-app-container backend-app