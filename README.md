#  CRUD PRODUCTO 
Este proyecto realiza un CRUD de la entidad producto, utilizando MySQL para almacenamiento seguro, .NET C# para un backend robusto y React para una interfaz ágil. Crea, lee, actualiza y elimina productos sin complicaciones.

## Requisitos
**1**. Tener instalado **MySQL**.
https://dev.mysql.com/downloads/installer/
	
**2**. Tener instalado **Visual studio**.
https://visualstudio.microsoft.com/es/vs/community/

**3**. Tener instalado **Visual studio code**.
https://code.visualstudio.com/download

**4**. Tener instalado **Node.js**.
https://nodejs.org/en/

**5**. Instalar **React** 
https://www.jsdelivr.com/package/npm/react-dom

**6**. Instalar **GitBash**
https://git-scm.com/

## Instalación
### 1 Paso
**1 forma**. Dar clic en Code y luego en Download Zip
**2 forma.** Crear una carpeta, ingresar a git bash y ejecutar

   git clone https://github.com/CristianPerezDomper/CrudProductoCristianPerez
    
### 2 Paso
- Abrir el programa MySql  y crear la base de datos **CREATE DATABASE dbproduct** 
- Usar la base de datos **USE dbproduct**
- Arrastrar el archivo **"ScriptDB.Sql"** ubicado **ProductAPI/DB**.
- Luego ejecutar el **"ScriptDB.sql"**.

### 3 Paso
- Abrir el archivo **ProductAPI.sln** ubicado en **ProductAPI/ProductAPI.sln** con **Visual Studio**.
- Modificar usuario y contraseña de la base de datos en el archivo **appsettings.json**.
- Ejecutar **ProductAPI**

### 4 Paso
- Ingresar a la carpeta de **ProductWebApp** y desde la carpeta click derecho abrir **Visual Studio Code**.
- Abrir **git Bash** desde la carpeta **ProductWebApp**.
- Desde git bash ingresar a la carpeta **product** escribiendo el comando **cd product**
- En git bash ejecuta **npm install**.
- Ejecutar el comando para react **npm start**.

## Vista previa
### APIs de Producto
![](https://i.imgur.com/QQn3cXd.jpeg)
### Vista inicial
![](https://i.imgur.com/RqmOinD.jpeg)
### Agregar producto
![](https://i.imgur.com/6DVtJcD.jpeg)
### Validación de registrar producto
![](https://i.imgur.com/ght4Kv9.jpeg)
### Editar producto
![](https://i.imgur.com/FUo5QvL.jpeg)
### Validación de editar
![](https://i.imgur.com/CC9eFCq.jpeg)
### Eliminar producto
![](https://i.imgur.com/CJEUOQG.jpeg)

## Conclusión del proyecto y ventajas
- El presente proyecto permite una mayor flexibilidad en la implementación de nuevas funcionalidades y cambios en el sistema, utilice paquete de Automapper que permite el mapeo de entidad.
