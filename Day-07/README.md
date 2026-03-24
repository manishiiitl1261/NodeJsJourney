Express Middleware :
In Express.js, middleware is just a function that runs between the request and the response.

Think of it like a checkpoint before the server sends the final response.

1. Real-life analogy

Imagine you go to a company building.

Before meeting the manager you go through:

1. Security check
2. Reception
3. Manager

flow : You → Security → Reception → Manager

Each step checks something before letting you go forward.

In Express this is exactly how middleware works

Client Request → Middleware → Route Handler → Response

Why middleware exists
Middleware helps to:

log requests
authenticate users
parse JSON
handle errors
modify request/response

## Without middleware, you would have to repeat the same code in every route.

If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

An Express application can use the following types of middleware:

Application-level middleware
Router-level middleware
Error-handling middleware
Built-in middleware
Third-party middleware
You can load application-level and router-level middleware with an optional mount path. You can also load a series of middleware functions together, which creates a sub-stack of the middleware system at a mount point.

---

To skip the rest of the middleware functions from a router middleware stack, call next('route') to pass control to the next route.

Built-in middleware
Starting with version 4.x, Express no longer depends on Connect. The middleware functions that were previously included with Express are now in separate modules; see the list of middleware functions.

---

Express has the following built-in middleware functions:

express.static -->serves static assets such as HTML files, images, and so on.
express.json -->parses incoming requests with JSON payloads.
express.urlencoded -->parses incoming requests with URL-encoded payloads.
