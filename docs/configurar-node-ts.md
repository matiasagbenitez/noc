# Node con TypeScript (ts-node-dev)

Instalar TypeScript y demás dependencias

``` bash
npm i -D typescript @types/node ts-node-dev rimraf
```

Inicializar el archivo de configuración de TypeScript

``` bash
npx tsc --init --outDir dist/ --rootDir src
```

Crear scripts para dev, build y start ([más sobre ts-node-dev aquí](https://www.npmjs.com/package/ts-node-dev))

``` json
  "dev": "tsnd --respawn --clear src/app.ts",
  "build": "rimraf ./dist && tsc",
  "start": "npm run build && node dist/app.js" 
```
