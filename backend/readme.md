## Ejercicio 1: 

Este punto consiste en armar un API Rest en Node.js (para ahorrar tiempo, como base puedes utilizar un stack de desarrollo con el que estés familiarizado), para este ejercicio si emplearas alguna base de datos, usa mongo-db o rethink-db.

### Los requisitos de este ejercicio son: 
- Debes crear una función que permita retornar una lista (longitud de la lista, es a criterio propio). 
- Una función que permita retornar un hotel en específico detallando sus propiedades. 
- Readme detallando instrucciones de cómo usar el Api. 



```
{ 
    "hotels" : [{ 
    "name" : "Hotel Emperador", 
    "stars" : "3", 
    "images" :[....], 
    "price" : "1596", 
    }, ...] 
}
```
Como correr la Aplicacion:

``` yarn install ```  para instalar los paquetes necesarios

``` yarn dev ```  Corre el backend en modo desarrollo (los archivos ts directamente)

``` yarn dev-script ```  Genera la base de datos con los datos mockeados necesarios

``` yarn build ```  Genera la aplicacion para deploy (genra los js necesarios)

``` yarn script ```  corre el script de datos desde los archivos de deploy (JS)

La aplicacion no esta configurara para IOS por que no tengo Mac ni Iphone y no pude hacer las pruebas.


Servicios:

 ``` GET /hotels/ ```  Devuelve los hoteles en una version minima (nombre, precio, rating y primer imagen)    
 ``` GET /hotel/hotelId ```    Devuelve el hotel segun su id. trae todos los datos   


