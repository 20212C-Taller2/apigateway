#!/usr/bin/env bash
heroku container:push web -a ubademy-apigateway-dev
heroku container:release web -a ubademy-apigateway-dev

# PROD
heroku container:push web -a ubademy-apigateway
heroku container:release web -a ubademy-apigateway