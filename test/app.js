"use strict";
var path = require("path");
var assert = require("yeoman-assert");
var helpers = require("yeoman-test");

describe("generator-ngx-firebase-bootstrap:app", function() {
  before(function() {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts({
        "name": "theproject",
        "apiKey": "my-api-key",
        "authDomain": "my-auth-key",
        "databaseURL": "my-database-url",
        "storageBucket": "my-storage-bucket",
        "messagingSenderId": "my-messaging-sender-id"
      })
      .toPromise();
  });

  it("it has package.json with project name", function() {
    assert.file(["package.json"]);
    assert.fileContent("package.json", /"name": "theproject",/);
  });

  it("it has package-lock.json with project name", function() {
    assert.file(["package-lock.json"]);
    assert.fileContent("package.json", /"name": "theproject",/);
  });

  it("it has README.md with project name", function() {
    assert.file(["README.md"]);
    assert.fileContent("README.md", /# theproject/);
  });

  it("it has firebaseConfig.ts with firebase config", function() {
    assert.file(["src/environments/firebaseConfig.ts"]);
    assert.fileContent("src/environments/firebaseConfig.ts", /apiKey: "my-api-key",/);
    assert.fileContent("src/environments/firebaseConfig.ts", /authDomain: "my-auth-key",/);
    assert.fileContent("src/environments/firebaseConfig.ts", /databaseURL: "my-database-url",/);
    assert.fileContent("src/environments/firebaseConfig.ts", /storageBucket: "my-storage-bucket",/);
    assert.fileContent("src/environments/firebaseConfig.ts", /messagingSenderId: "my-messaging-sender-id"/);
  });

  it("it has angular.json with project name", function() {
    assert.file(["angular.json"]);
    assert.fileContent("angular.json", /"theproject": {/);
    assert.fileContent("angular.json", /"browserTarget": "theproject:build"/);
    assert.fileContent("angular.json", /"browserTarget": "theproject:build:production"/);
    assert.fileContent("angular.json", /"theproject-e2e": {/);
    assert.fileContent("angular.json", /"devServerTarget": "theproject:serve"/);
    assert.fileContent("angular.json", /"defaultProject": "theproject",/);
  });

  it("it has app.e2e-spec.ts with project name", function() {
    assert.file(["e2e/app.e2e-spec.ts"]);
    assert.fileContent("e2e/app.e2e-spec.ts", /describe\('theproject App', function\(\) {/);
  });

  it("it has app.component.html with project name", function() {
    assert.file(["src/app/app.component.html"]);
    assert.fileContent("src/app/app.component.html", /<a class="navbar-brand" \[routerLink\]="\[''\]">theproject<\/a>/);
  });

  it("it has app.component.spec.ts with project name", function() {
    assert.file(["src/app/app.component.spec.ts"]);
    assert.fileContent("src/app/app.component.spec.ts", /expect\(app.title\)\.toEqual\('app works! - theproject'\);/);
    assert.fileContent("src/app/app.component.spec.ts", /expect\(compiled\.querySelector\('h1'\)\.textContent\).toContain\('app works! - theproject'\);/);
  });

  it("it has app.module.ts with project name", function() {
    assert.file(["src/app/app.module.ts"]);
    assert.fileContent("src/app/app.module.ts", /AngularFireModule.initializeApp\(firebaseConfig, "theproject"\),/);
  });

  it("it has index.html with project name", function() {
    assert.file(["src/index.html"]);
    assert.fileContent("src/index.html", /<title>theproject<\/title>/);
  });
});
