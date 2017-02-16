# generator-angular2-firebase-bootstrap [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Generator for Angular 2 - Firebase - Bootstrap projects

## Installation

First, install [Yeoman](http://yeoman.io) and generator-angular2-firebase-bootstrap using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-angular2-firebase-bootstrap
# If you want this generator to init a git repository for yoy
npm install -g generator-git-init
```

Then generate your new project:

```bash
yo angular2-firebase-bootstrap
```

## Features

* An Angular 2 generated with angular-cli.
* Bootstrap with ng2-bootstrap
* AngularFire2 for Firebase
* An initial implementation of an authentication service (See auth-service)
* One component to display user information (from Firebase)
* One component to login using username/password, Google or Twitter
* One component to allow a user to register himself with username/password.

## Getting Started

You should have your Firebase project created in Firebase. For this, go to the [Firebase Console](https://console.firebase.google.com/)
and create a new project, in the newly created project go to 'Add Firebase to your web app'. This option will give you all the credential
information you will need later. For authentication to work, you should enable Google 
Authentication. The seeded project contains the auth-service that can handle several types of authentication. Please note, that
at this moment the generated project does not provide a form for registration.

1. Create a project folder and enter it: `mkdir myproject && cd $_`
2. Generate project: `yo angular2-firebase-bootstrap`

The generator will ask you a few information on your Firebase project:

* Your Api Key
* Your Auth Domain
* Your Database URL
* Your Storage Bucket
* Your Messaging SenderId

You should have those handy when you run the generator. Otherwise, you can go and fill 
in those values in the firebaseConfig.ts file in the generated project. 

The generator will also optionally run `git init` on your project and do an initial commit for you.

## Firebase Authentication example

The generated project will contain example code to authenticate to your project in Firebase. For this to actually work,
you will have to enable authentication in your firebase project. The project supports Email/Password, Google Sign-In and Twitter.
Go to [Firebase Authentication Documentation](https://firebase.google.com/docs/auth/) to find out how to enable authentication for your
project in Firebase. Please note that to use Email/Password authentication, so you will have to register users yourself via the 
Firebase Console.

The generated project will contain 2 ready to be used components for login and display user information. They are initially
present in the home page of the application but can be moved elsewhere at your convenience.

## Angular 2 Specifics

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.21. It currently runs
fine with angular-cli version 1.0.0-beta.24.

### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

### Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


### License

Apache-2.0 © [Bernard Niset]()


[npm-image]: https://badge.fury.io/js/generator-angular2-firebase-bootstrap.svg
[npm-url]: https://npmjs.org/package/generator-angular2-firebase-bootstrap
[travis-image]: https://travis-ci.org/bn3t/generator-angular2-firebase-bootstrap.svg?branch=master
[travis-url]: https://travis-ci.org/bn3t/generator-angular2-firebase-bootstrap
[daviddm-image]: https://david-dm.org/bn3t/generator-angular2-firebase-bootstrap.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/bn3t/generator-angular2-firebase-bootstrap
