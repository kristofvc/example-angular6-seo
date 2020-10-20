# Example SEO in an Angular 6 app

## Install dependencies

- yarn add express
- yarn add @angular/platform-server
- yarn add @nguniversal/common
- yarn add @nguniversal/express-engine

## Add browser and server module

- ng generate module browser
- ng generate module server
- In your browser module bootstrap AppComponent
- Same for the server module
- Bootstrap BrowserAnimations in the browser module, and NoopAnimations in the server module (if you want to use animations)
- In you app module imports instead of BrowserModule add `BrowserModule.withServerTransition({ appId: 'example-angular6-seo' })`

## Change main.ts to load the BrowserModule

```angular2
document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic().bootstrapModule(AppBrowserModule)
  .catch(err => console.error(err));
});
```           

## Add src/tsconfig.server.json in which you load the AppServerModule

## Add server.ts and server.tsconfig.json

## Add server config in angular.json

```json
        "server": {
          "builder": "@angular-devkit/build-angular:server",
          "options": {
            "outputPath": "dist/example-angular6-seo-server",
            "main": "src/main.server.ts",
            "tsConfig": "src/tsconfig.server.json"
          },
          "configurations": {
            "production": {
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.prod.ts"
                }
              ]
            }
          }
        }
```

## Add build commands in package.json

```json
    "build-prod": "ng build --prod && ng run example-angular6-seo:server:production --output-hashing=none",
    "build-server": "tsc -p server.tsconfig.json",
    "build-all": "npm run build-prod && npm run build-server",
    "run-server": "node dist/example-angular6-seo-server/server.js"
```
