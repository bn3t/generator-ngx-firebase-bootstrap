# generator-ngx-firebase-bootstrap [![NPM version][npm-image]][npm-url] [![Build Status](https://travis-ci.org/bn3t/generator-ngx-firebase-bootstrap.svg?branch=develop)](https://travis-ci.org/bn3t/generator-ngx-firebase-bootstrap)

A Yeoman generator for creating projects based on Angular, Firebase and Twitter Bootstrap. This generator provides basic integration
with those tools and offers a framework for authentication right out of the box.

![angular-220px](https://cloud.githubusercontent.com/assets/1102723/24071875/b0571ecc-0bdc-11e7-940f-dc042b0578ef.png)
![bootstrap-social-logo-220px](https://cloud.githubusercontent.com/assets/1102723/24071881/bca110f2-0bdc-11e7-933d-7ac4d972cee4.png)
![firebase_16-logo-220px](https://cloud.githubusercontent.com/assets/1102723/24071871/a1a11446-0bdc-11e7-9161-399fd17f4829.png)

## Features

* An **Angular 6** app generated with angular-cli (Angular 6.0.2)
* Twitter Bootstrap with ngx-bootstrap
* AngularFire2 and Firebase
* An initial implementation of an authentication service (See auth-service)
* One component to display user information
* One component to login using username/password, Google or Twitter
* One component to allow a user to register himself with username/password.
* One component for password reset (when using username/password).
* An Angular Router setup to allow navigation between the following pages of your application:
  * An All-in-one page to show all above components
  * A Home page that shows user information when logged in
  * A Dashboard page as an example of a Guarded page in your application (only available when logged in)
  * A Login page which shows the login component and the reset password component
  * A Register page which shows the register component
  * A LoggedInGuard to use in your router configuration for page that requires the user to be logged in

Now the router setup allows navigation between the pages and the components. You will just need to customize the Home page
and add more pages to your own needs.

## Installation

### Requirement Node 6+ && NPM 3+

This generator is targeted to be used with Node >= 9.8.0 and NPM >= 6.0.0. You can check your version number with the command

```shell
$ node --version && npm --version
v9.8.0
6.0.1
```

### Requirement Angular CLI

To build and run this project, you will need Angular CLI. This version is compatible with @angular/cli 6.0.3. If you have
any previous instantiation of the Angular CLI, you should remove them.

```shell
$ npm uninstall -g angular-cli # remove any previous angular-cli
$ npm i -g @angular/cli
$ ng --version
     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 6.0.3
Node: 9.11.1
OS: darwin x64
Angular: undefined
...

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.6.3 (cli-only)
@angular-devkit/core         0.6.3 (cli-only)
@angular-devkit/schematics   0.6.3 (cli-only)
@schematics/angular          0.6.3 (cli-only)
@schematics/update           0.6.3 (cli-only)
rxjs                         5.5.10
```

### Steps to install

First, install [Yeoman](http://yeoman.io) and generator-ngx-firebase-bootstrap using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```shell
$ npm install -g yo
$ npm install -g generator-ngx-firebase-bootstrap
# If you want this generator to init a git repository for you
# not supported for the moment: $ npm install -g generator-git-init
```

Then generate your new project:

```shell
$ yo ngx-firebase-bootstrap
```

## Getting Started

You should have your Firebase project created in Firebase. For this, go to the
[Firebase Console](https://console.firebase.google.com/) and create a new project, in the newly
created project go to 'Add Firebase to your web app'. This option will give you all the
credential information you will need when generating your project. For authentication to work, you
should enable the Authentication methods you want to use (See [Authenticate Using Google Sign-In with JavaScript](https://firebase.google.com/docs/auth/web/google-signin)). The seeded project contains a auth-service
provider that can handle several types of authentication.

### Steps to scaffold a new project

1.  Create a project folder and enter it: `mkdir myproject && cd $_`
2.  Generate project: `yo ngx-firebase-bootstrap`

The generator will ask you a few information on your Firebase project:

* Your Api Key
* Your Auth Domain
* Your Database URL
* Your Storage Bucket
* Your Messaging SenderId

You should have those handy when you run the generator. Otherwise, you can go and fill
in those values in the firebaseConfig.ts file in the generated project.

_Not supported for the moment_: The generator will also optionally run `git init` on your project and do an initial commit for you.

## Squeleton of the generated app

The generated project will contain example code to authenticate to your project in Firebase.
For this to actually work, you will have to enable authentication in your firebase project.
The project supports Email/Password, Google Sign-In and Twitter. You could probably use Facebook and Github
but we never tested that.

Go to [Firebase Authentication Documentation](https://firebase.google.com/docs/auth/) to find out how to
enable authentication for your project in Firebase. Please note that to use Email/Password authentication,
so you will have to register users yourself via the Firebase Console.

The generated project will contain the following pages to help you start with your application featuring a basic router
setup.

### Navigation Bar

There is a Bootstrap base navigation bar provided as an example.

![Navigation Bar](https://user-images.githubusercontent.com/1102723/27261010-9900d58c-543a-11e7-9c05-ba194e499f31.png)

### Login Page

The Home (when not already logged in) has a link to the Login Page which allows to Login via Twitter, Google or Email/Password. The Login page also has the Reset Password component.

![Login Page](https://user-images.githubusercontent.com/1102723/27261022-f6852f14-543a-11e7-9a04-8bfd2f16ec53.png)

### Register Page

Also accessible from the Home page, the Register page shows the register component to allow ... guess what.

![Screenshot](https://user-images.githubusercontent.com/1102723/27261046-73876626-543b-11e7-8859-c8a4479d6c21.png)

### Home Page

When not logged in the Home Pages shows links to the Login and Register pages, otherwise, it shows user information as shown below.

![Home Page when Logged In](https://user-images.githubusercontent.com/1102723/27261122-d3ade218-543c-11e7-92bc-daf42a0d08b4.png)

### Dashboard Page

The Dashboard page is an example of a proteted page in your application. The page is protected by the LoggedInGuard that
checks the user is logged in before allowing access.

![Dashboard Page](https://user-images.githubusercontent.com/1102723/27261123-d8725036-543c-11e7-9f7d-0a5f6ae97e5e.png)

### All-in-one Page

This page is available when not logged in and shows all available components in one convenient page.

![All-in-one Page](https://user-images.githubusercontent.com/1102723/27261168-744afe22-543d-11e7-90da-d63de4347af2.png)

## Run the application

To run the project using Angular CLI, do the following:

```shell
$ ng serve                                                                                                                  130 ↵
** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **

Date: 2018-05-20T11:14:31.504Z
Hash: 4c66c7c1edfed1ce558d
Time: 14024ms
chunk {main} main.js, main.js.map (main) 83.8 kB [initial] [rendered]
chunk {runtime} runtime.js, runtime.js.map (runtime) 5.22 kB [entry] [rendered]
chunk {styles} styles.js, styles.js.map (styles) 134 kB [initial] [rendered]
chunk {vendor} vendor.js, vendor.js.map (vendor) 6.43 MB [initial] [rendered]
ℹ ｢wdm｣: Compiled successfully.
```

Please refer to Angular CLI documentation below.

## Deploy to Firebase Hosting

To deploy your application to Firebase Hosting you should follow the instructions as explained at [Deploy Your Site](https://firebase.google.com/docs/hosting/deploying) in the Firebase Documentation.

In a nutshell:

```shell
$ firebase init

> Choose Hosting
> Accept default database.rules.json
> Choose 'dist' as your public directory
> Enter 'yes' for rewrite all urls to index.html
> Enter 'no' for Overwriting dist/index.html
```

Then build your application for production with AOT.

```shell
$ ng build --prod --aot
```

Then deploy to Firebase.

```shell
$ firebase deploy
```

## Angular CLI Specifics

This project was generated with [Angular Cli](https://github.com/angular/angular-cli/wiki). The project is still compatible
with the CLI so you can use it to run your Development server, add more components, etc.

### License

Apache-2.0 © [Bernard Niset]()

[npm-image]: https://badge.fury.io/js/generator-ngx-firebase-bootstrap.svg
[npm-url]: https://npmjs.org/package/generator-ngx-firebase-bootstrap
