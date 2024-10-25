import{Router} from "express";
import{renderTasks, createTask, aboutTask, renderTaskEdit, editTask, deleteTask, doneTask} from '../controllers/tasks.controller.js';
import{renderUsers, createUser, renderUserEdit, editUser, deleteUser} from '../controllers/user.controller.js';
import{renderProducts, createProduct, renderProductEdit, editProduct, deleteProduct} from '../controllers/products.controller.js';
import{renderClients, createClient, renderClientEdit, editClient, deleteClient} from '../controllers/clients.controller.js';
import{renderSuppliers, createSupplier, renderSupplierEdit, editSupplier, deleteSupplier} from '../controllers/proveedor.controller.js';

const router = Router();

router.get("/",renderTasks);
router.post("/task/add",createTask);
router.get("/about", aboutTask);
router.get("/edit/:id", renderTaskEdit);
router.post("/edit/:id", editTask);
router.get("/delete/:id", deleteTask);
router.get("/taggdone/:id", doneTask);

// Rutas de usuarios
router.get("/users", renderUsers); // Mostrar todos los usuarios
router.post("/users/add", createUser); // Añadir un usuario
router.get("/users/edit/:id", renderUserEdit); // Mostrar formulario de edición de usuario
router.post("/users/edit/:id", editUser); // Actualizar usuario
router.delete("/users/delete/:id", deleteUser); // Eliminar usuario

// Rutas de productos
router.get("/products", renderProducts); // Mostrar todos los productos
router.post("/products/add", createProduct); // Añadir un producto
router.get("/products/edit/:id", renderProductEdit); // Mostrar formulario de edición de producto
router.post("/products/edit/:id", editProduct); // Actualizar producto
router.delete("/products/delete/:id", deleteProduct); // Eliminar producto

// Rutas de clientes
router.get("/clients", renderClients); // Mostrar todos los clientes
router.post("/clients/add", createClient); // Añadir un cliente
router.get("/clients/edit/:id", renderClientEdit); // Mostrar formulario de edición de cliente
router.post("/clients/edit/:id", editClient); // Actualizar cliente
router.delete("/clients/delete/:id", deleteClient); // Eliminar cliente

// Rutas de proveedores
router.get("/suppliers", renderSuppliers); // Mostrar todos los proveedores
router.post("/suppliers/add", createSupplier); // Añadir un proveedor
router.get("/suppliers/edit/:id", renderSupplierEdit); // Mostrar formulario de edición de proveedor
router.post("/suppliers/edit/:id", editSupplier); // Actualizar proveedor
router.delete("/suppliers/delete/:id", deleteSupplier); // Eliminar proveedor

export default router;