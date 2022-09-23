# <p align = "center"> DrivenPass Backend </p>

Check project frontend [here](https://github.com/williameiji/drivenpass-frontend)


##  :clipboard: Description

A password manager!

***

## :computer:	 Technologies and Concepts

- REST APIs
- Node.js
- TypeScript
- SQL with Prisma
- JsonWebToken
- Cryptr
- Bcrypt
- Joi
- Nodemon

***

## :rocket: Routes

```yml
POST /signup
    - Route to register a new user
    - headers: {}
    - body:{
        "email": "lorem@gmail.com,
        "password": "lore"
}
```
    
```yml 
POST /login
    - Route to login
    - headers: {}
    - body: {
    "email": "lorem@gmail.com",
    "password": "lore"
    }
```

```yml
GET /records (authenticated)
    - Route to list the number os records
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
    
```yml 
GET /credentials (authenticated)
    - Route to list all credentials
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
GET /credentials/:id (authenticated)
    - Route to list a credential
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml
POST /credentials (authenticated)
    - Route to add a new credential
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "title": "Animi possimus",
        "url": "http://www.google.com.br",
        "name": "Loremips",
        "password": "1234567",
    }
``` 

```yml
DELETE /credentials/:id (authenticated)
    - Route to list a credential
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml 
GET /notes (authenticated)
    - Route to list all notes
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
GET /notes/:id (authenticated)
    - Route to list a note
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml
POST /notes (authenticated)
    - Route to add a new note
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "title": "Animi possimus",
        "note": "Voluptatem repellat consequatur deleniti qui quibusdam harum cumque."
    }
``` 

```yml
DELETE /notes/:id (authenticated)
    - Route to list a notes
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml 
GET /cards (authenticated)
    - Route to list all cards
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
GET /cards/:id (authenticated)
    - Route to list a card
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml
POST /cards (authenticated)
    - Route to add a new card
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "title": "Animi possimus",
        "number": "123412341234",
        "name": "Lorem Ips",
        "cvc": "123",
        "date": "02/27",
        "password": "1793",
        "type": "crédito" | "débito" | "ambos",
        "isVirtual": "true" | "false"
    }
``` 

```yml
DELETE /cards/:id (authenticated)
    - Route to list a cards
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml 
GET /wifis (authenticated)
    - Route to list all wifis
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
GET /wifis/:id (authenticated)
    - Route to list a wifi
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml
POST /wifis (authenticated)
    - Route to add a new wifi
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "title": "Animi possimus",
        "name": "neighbor's wifi",
        "password": "1793123",
    }
``` 

```yml
DELETE /wifis/:id (authenticated)
    - Route to list a wifis
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml 
GET /documents (authenticated)
    - Route to list all documents
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
GET /documents/:id (authenticated)
    - Route to list a document
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml
POST /documents (authenticated)
    - Route to add a new document
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "type": "rg" | "cnh",
        "number": "12314123141",
        "name": "Lorem Ips",
        "validate": "10/10/2025",
        "emission": "10/10/2021",
        "dispatched": "ssp"
    }
``` 

```yml
DELETE /documents/:id (authenticated)
    - Route to list a documents
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 


## 🏁 Running the application

This project was started with the [Express](https://www.npmjs.com/package/express), so make sure you have the latest stable version of [Node.js](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/) running locally.


First, clone this repository on your machine:

```
git clone https://github.com/williameiji/drivenpass-backend
```

Then, inside the folder, run the following command to install the dependencies.

```
npm install
```

Finished the process, just start the server
```
npm run dev
```

