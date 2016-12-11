# generator-angular-2-firebase-bootstrap [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Generator for Angular 2 - Firebase - Bootstrap projects

## Installation

First, install [Yeoman](http://yeoman.io) and generator-angular-2-firebase-bootstrap using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-angular-2-firebase-bootstrap
```

Then generate your new project:

```bash
yo angular-2-firebase-bootstrap
```

## Features

* Angular 2 with angular-cli.
* Bootstrap with ng2-bootstrap
* AngularFire2 for Firebase
* An initial implementation of an authentication service (See auth-service).

## Getting Started

You should have your Firebase project created in Firebase. For authentication to work, you should enable Google 
Authentication. The seeded project contains the auth-service that can handle several types of authentication. But
as we don't provide forms for registration and login, the Email/Password is not supported as such.

1. Create a project folder and enter it: `mkdir myProject && cd $_`

2. Generate project: `yo generator-angular-2-firebase-bootstrap`

The generator will ask you a few information on your Firebase project:

* Your Api Key
* Your Auth Domain
* Your Database URL
* Your Storage Bucket
* Your Messaging SenderId

You should have those handy when you run the generator. Otherwise, you can go and fill 
in those values in the firebaseConfig.ts file in the generated project. 

The generator will also optionally run `git init` on your project and do an initial commit for you.


## License

Apache-2.0 © [Bernard Niset]()


[npm-image]: https://badge.fury.io/js/generator-angular-2-firebase-bootstrap.svg
[npm-url]: https://npmjs.org/package/generator-angular-2-firebase-bootstrap
[travis-image]: https://travis-ci.org/bn3t/generator-angular-2-firebase-bootstrap.svg?branch=master
[travis-url]: https://travis-ci.org/bn3t/generator-angular-2-firebase-bootstrap
[daviddm-image]: https://david-dm.org/bn3t/generator-angular-2-firebase-bootstrap.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/bn3t/generator-angular-2-firebase-bootstrap
