
# Vue MFEs Template

This a boilerplate/template for micro-frontend (MFE) apps for Vue.js applications.

### Clone to local
```
npx degit thejawadali/vue-mfe-template my-mfe-app
cd my-mfe-app
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```


## Micro-frontend (MFEs)

To expose or make a component or importable in another app,
go to `vue.config.js` and expose it with the name you want.
```javascript
new ModuleFederationPlugin({
    ...
    name: "MY_REMOTE_APP"
    exposes: {
        "./REMOTE_COMPONENT_NAME": "./src/MyComponent.vue"
    }
})
```
To use that component in host application, declare it in remotes object in `vue.config.js` 

```javascript
new ModuleFederationPlugin({
    ...
    name: "MY_HOST_APP"
    remotes: {
        remoteApp: "MY_REMOTE_APP@<remote_app_url>/remoteEntry.js"
    }
})
```

To use this component in any of our host app's component

```javascript
import RemoteApp from "remoteApp/REMOTE_COMPONENT_NAME";
```
