const routes = require("express").Router()

const authMiddleware = require("./app/middleware/auth")

const SessionController = require("./app/controllers/User/SessionUser")
const UserController = require("./app/controllers/User/User")
const productController = require("./app/controllers/Product/Product")




//rotas públicas do usuário
routes.post("/signin", SessionController.store)
routes.post("/signup", UserController.store)

routes.use(authMiddleware)

// rotas privadas do product
routes.post("/addproduct", productController.store)
routes.get("/listallproduct", productController.listAll) 
routes.delete("/deleteproduct/:id", productController.delete)
routes.put("/updateproduct", productController.update)


//rotas privadas do usuário
routes.get("/listUsersByid",UserController.listById)
routes.delete("/deleteUser", UserController.delete)
routes.put("/updateUser", UserController.update)
routes.get("/listalluser", UserController.listAlll)



module.exports = routes;