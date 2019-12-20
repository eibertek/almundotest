# Ejercicio 2 - Mobile App 

### Este ejercicio consiste en crear una aplicación React Native la cual debe tener:

  - Una pantalla donde se listen los hoteles que devuelve el método lista de hoteles del Api del ejercicio 1. 
  - Una pantalla donde se muestre el detalle de un hotel que se consume del método detalle de hotel del Api del ejercicio 1. 
  - Debe haber navegación tanto de la pantalla de resultado a detalle y viceversa. 
  - Uso de patrones de diseño y buenas prácticas. 
  - Readme detallando cómo instrucciones de cómo levantar la aplicación y como está compuesta. 
```
{ 
    "hotels" : [{ 
    "name" : "Hotel Emperador", 
    "stars" : "3", 
    "images" :[....], 
    "price" : "1596", 
    ammenities: {
    }
    }, ...] 
}
```

Pantallas:
    Lista de hoteles
        llamado a Saga trayendo la lista de hoteles de la primera pagina 1h
        mostrar slider de hoteles pensar si va a ir llamando conforme se baja al ultimo o poner botones de paginacion 2h
        Mostrar 
            Nombre Hotel -- estrellas [numero de estrellas]
            Slide de imagenes / first image  --- precio
        Al hacer click en el slide se va la pantalla hotel
    Hotel 3h
        Aca aparece el hotel con los datos
            Nombre hotel 
            cantidad de estrellas
                                    Precio
            Imagenes

            Ammenities
            
https://www.freecodecamp.org/news/how-to-optimize-react-applications-with-lazy-loading-232183e02768/
