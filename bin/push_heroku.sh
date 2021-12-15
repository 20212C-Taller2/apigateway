#!/usr/bin/env bash

# PROD
heroku container:push web -a ubademy-apigateway
heroku container:release web -a ubademy-apigateway