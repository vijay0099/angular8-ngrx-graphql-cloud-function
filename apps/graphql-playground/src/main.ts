/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Logger } from '@nestjs/common';
// import { Logger } from 'nestjs-pino';

// SECURITY
import * as helmet from 'helmet';
import * as csurf from 'csurf';

// LOG COLORING
const colors = require('colors');
colors.enable();

// FIRESTORE
import * as admin from 'firebase-admin';
import * as client from 'firebase';

import { environment } from '@monorepo/shared/environments';

// FIREBASE INIT VIA CONFIG FILE
//const serviceAccount = require('../../../../../service-account-file.json');

async function bootstrap() {
  // LOGGING
  if (JSON.parse(process.env.GRAPHQL_PLAYGROUND_LOGGING_ENABLED)) {
    console.log(
      colors.brightRed(
        'process.env.GRAPHQL_PLAYGROUND_LOGGING_ENABLED = ',
        process.env.GRAPHQL_PLAYGROUND_LOGGING_ENABLED
      )
    );

    console.log(
      colors.brightRed('client_email = ', process.env.SERDEV_CLIENT_EMAIL)
    );
    console.log(
      colors.brightRed('project_id = ', process.env.SERDEV_PROJECT_ID)
    );
    console.log(
      colors.brightRed(process.env.SERDEV_PRIVATE_KEY.replace(/\\n/g, '\n'))
    );
  }

  if (!admin.apps.length) {
    // FIREBASE INIT ADMIN SDK VIA ENV VARIABLES
    admin.initializeApp({
      credential: admin.credential.cert({
        clientEmail: process.env.SERDEV_CLIENT_EMAIL,
        privateKey: process.env.SERDEV_PRIVATE_KEY.replace(/\\n/g, '\n'),
        projectId: process.env.SERDEV_PROJECT_ID
      }),
      databaseURL: 'https://little-dragon-ngo.firebaseio.com'
    });

    // LOGGER
    Logger.log(
      colors.brightMagenta(
        `Firebase admin SDK initialized. Version ${admin.SDK_VERSION}`
      ),
      'Firebase SDK'
    );

    // FIREBASE INIT CLIENT SDK
    client.initializeApp(environment.firebaseConfig);

    // LOGGER
    Logger.log(
      colors.brightMagenta(
        `Firebase client SDK initialized. Version ${client.SDK_VERSION}`
      ),
      'Firebase SDK'
    );
  }

  // FIREBASE INIT CLIENT SDK
  // if (!firebase.apps.length) {
  //   firebase.initializeApp(environment.firebaseConfig);
  // }

  // FIREBASE INIT VIA FILE
  // admin.initializeApp({
  //   credential: admin.credential.cert(serviceAccount)
  // });

  // AN APP INSTANCE WITH CORS ENABLED
  const app = await NestFactory.create(AppModule, {
    cors: true,
    logger: ['log', 'error', 'warn', 'debug', 'verbose']
    // logger: true
  });
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  // USE PINO LOGGER
  // app.useLogger(app.get(Logger));

  // HELMET AS MIDDLEWARE, SECURITY-RELATED HTTP HEADERS
  app.use(helmet());

  // DISABLE IN PRODUCTION
  // app.enableCors();

  const port = process.env.port || 3333;

  await app.listen(port, () => {
    // LOGGER
    Logger.log(
      colors.brightGreen(
        `Apollo Server on http://localhost:${port}/${globalPrefix}`
      ),
      'Bootstrap'
    );
  });

  // CSURF AS MIDDLEWARE, CROSS-SITE REQUEST FORGERY (CSRF) PROTECTION AGAINST UNAUTHORIZED ACCESS
  app.use(csurf());
}

bootstrap();
