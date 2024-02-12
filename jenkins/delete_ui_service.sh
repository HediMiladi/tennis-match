#!/bin/bash

SERVICE_NAME="TENNIS_tennis-app"

# Check if the service exists
if docker service ls | grep -q "\b${SERVICE_NAME}\b"; then
    # Delete the service
    docker service rm "${SERVICE_NAME}"
    echo "Service ${SERVICE_NAME} deleted."
else
    echo "Service ${SERVICE_NAME} does not exist."
fi