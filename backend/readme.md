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

1 - Tener BD de mongo o Rethink
2 - crear servicio de creacion de base de datos
  crear tabla Hotels
  cambiar la data de la DB en el script
  llenar con informacion mockeada
  si existe la tabla hotels, borrarla
  crear tabla hotels 1:30h

3 - Crear dos funciones
    ``` GET /hotels/ ```  
    ``` GET /hotel/hotelId ```       


