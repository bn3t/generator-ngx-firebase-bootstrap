# generator-angular2-firebase-bootstrap [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

A Yeoman generator for creating projects based on Angular, Firebase and Twitter Bootstrap.

![angular-220px](https://cloud.githubusercontent.com/assets/1102723/24071875/b0571ecc-0bdc-11e7-940f-dc042b0578ef.png) 
![bootstrap-social-logo-220px](https://cloud.githubusercontent.com/assets/1102723/24071881/bca110f2-0bdc-11e7-933d-7ac4d972cee4.png) 
![firebase_16-logo-220px](https://cloud.githubusercontent.com/assets/1102723/24071871/a1a11446-0bdc-11e7-9161-399fd17f4829.png)


## Features

* An Angular 2 app generated with angular-cli
* Twitter Bootstrap with ng2-bootstrap
* AngularFire2 and Firebase
* An initial implementation of an authentication service (See auth-service)
* One component to display user information
* One component to login using username/password, Google or Twitter
* One component to allow a user to register himself with username/password.

## Installation

### Requirement Node 6+ && NPM 3+

This generator is targeted to be used with Node >= 6.9.0 and NPM => 3.0.0. You can check your version number with the command

```
$ node --version && npm --version
```

### Requirement Angular CLI

To build and run this project, you will need Angular CLI. This version is compatible with @angular/cli rc2. If you have
any previous instantiation of the Angular CLI, you should remove them.

```
$ npm uninstall -g angular-cli # remove any previous angular-cli
$ npm i -g @angular/cli
$ ng --version # make sur you have the correct version of angular/cli
    _                      _                 ____ _     ___
   / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
  / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
 / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
/_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
               |___/
@angular/cli: 1.0.0-rc.2
node: 6.10.0
os: darwin x64
@angular/common: 2.4.10
@angular/compiler: 2.4.10
@angular/core: 2.4.10
@angular/forms: 2.4.10
@angular/http: 2.4.10
@angular/platform-browser: 2.4.10
@angular/platform-browser-dynamic: 2.4.10
@angular/router: 3.4.10
@angular/compiler-cli: 2.4.10
@angular/cli: 1.0.0-rc.2
```

### Steps to install

First, install [Yeoman](http://yeoman.io) and generator-angular2-firebase-bootstrap using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-angular2-firebase-bootstrap
# If you want this generator to init a git repository for you
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
* One ready to use component to display user information (from Firebase)
* One ready to use component to login using username/password, Google or Twitter.

## Getting Started

You should have your Firebase project created in Firebase. For this, go to the 
[Firebase Console](https://console.firebase.google.com/) and create a new project, in the newly 
created project go to 'Add Firebase to your web app'. This option will give you all the 
credential information you will need when generating your project. For authentication to work, you 
should enable the Authentication methods you want to use. The seeded project contains a auth-service 
provider that can handle several types of authentication.

### Steps to scaffold a new project

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

The generated project will contain example code to authenticate to your project in Firebase. 
For this to actually work, you will have to enable authentication in your firebase project. 
The project supports Email/Password, Google Sign-In and Twitter. You could probably use Facebook and Github but we never tested that. Go to [Firebase Authentication Documentation](https://firebase.google.com/docs/auth/) to find out how to enable authentication for your project in Firebase. Please note that to use Email/Password authentication, so you will have to register users yourself via the Firebase Console.

The generated project will contain 3 ready to be used components for login, register and display user information. They are initially present in the home page of the application but can be moved elsewhere at your convenience.

![Screenshot](https://cloud.githubusercontent.com/assets/1102723/23092845/0169093e-f5d4-11e6-9f1f-86f89839f96b.png)

## Deploy to Firebase Hosting

To deploy your application to Firebase Hosting you should follow the instructions as explained at [Deploy Your Site](https://firebase.google.com/docs/hosting/deploying) in the Firebase Documentation.

In a nutshell:

```bash
$ firebase init

> Choose Hosting
> Accept default database.rules.json
> Choose 'dist' as your public directory
> Enter 'no' for rewrite all urls to index.html
```

Then build your application for production with AOT.

```bash
ng build --prod --aot
```

Then deploy to Firebase.

```bash
firebase deploy
```

## Angular 2 Specifics

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.21. It currently runs fine with angular-cli version 1.0.0-beta.28.3. It also supports AOT.

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
