What is REST API? :

some rule like :

1.  server client architechture :
    means server is a diff entity and client is diff entity so they both should not dependent to each other

XML: key value pair .
JSON javascript Object Notation

2. Alwayes respect all http methods

---

REST API :

// like our server is same for all like browser,Android ,ios ,, so we have to res like for browser HTML only for Android ,ios some JSON data

means a Hybrid Server

GET --> /users ---> HTML document render

GET --> /api/users --> LIst all users JSON

// Dynamic Path Parameters
GET /api/users/:id
:id -> Variable | dynamic

GET /api/users/1 - GEt the user with ID 1

POST /api/users -> Create New User

PATCH /api/useres/1 -> Edit the user with ID 1

DELETE /api/users/1 -> Delete the user with ID 1
