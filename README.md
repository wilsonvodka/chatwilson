# chat-nodeJs-socketIO
Chat elaborado con NodeJs y SocketIO y maquetado con Bootstrap.

## Para arrancar el servidor

Simplemente posicionarse en la carpeta y ejecutar el comando:

```npm start```

## Posibles problemas con el servidor y client si no hay comunicación.

En el archivo **_Client/main.js_** modificar la siguiente linea:
```
var socket = io.connect('http://192.168.1.47:7077', { 'forceNew': true });
```
Para que la ip del _servidor_ sea la que tiene vuestra maquina que va a hostear el servidor.
