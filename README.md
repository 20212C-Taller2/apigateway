# apigateway
A soft api-gateway built on expressjs that works as a soft layer for single entrypoint

## Usage
Instalar con `npm ci`

Ejecutar con `npm start`

## Docker
Para construir en docker: 

```shell
docker image build -t ubademy/apigateway:latest .
```

## Heroku
Subir a Heroku una vez logueado con el cli (heroku y registry de heroku)

```shell
# DEV
heroku container:push web -a ubademy-apigateway-dev
heroku container:release web -a ubademy-apigateway-dev

# PROD
heroku container:push web -a ubademy-apigateway
heroku container:release web -a ubademy-apigateway
```

La app se publica en [https://ubademy-apigateway.herokuapp.com/](https://ubademy-apigateway.herokuapp.com/)

User Api: [https://ubademy-apigateway.herokuapp.com/user/](https://ubademy-apigateway.herokuapp.com/user/)