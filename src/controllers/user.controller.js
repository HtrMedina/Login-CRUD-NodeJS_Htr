import User from '../models/User';

export const renderUsers = async (req, res) => {
    try {
        const users = await User.find().lean();
        res.render("users/index", { users });
    } catch (error) {
        console.log(error);
        res.status(500).send("Error al cargar los usuarios");
    }
};

export const createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.redirect('/users'); // Redirige a la lista de usuarios después de guardar
    } catch (error) {
        console.log(error);
        res.status(500).send("Error al guardar el usuario");
    }
};

export const renderUserEdit = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).lean();
        res.render("users/edit", { user });
    } catch (error) {
        console.log(error);
        res.status(500).send("Error al cargar el usuario");
    }
};

export const editUser = async (req, res) => {
    const { id } = req.params;
    try {
        await User.findByIdAndUpdate(id, req.body, { new: true }); // { new: true } devuelve el documento actualizado
        res.redirect('/users');
    } catch (error) {
        console.log(error);
        res.status(500).send("Error al editar el usuario");
    }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await User.findByIdAndDelete(id);
        res.redirect('/users');
    } catch (error) {
        console.log(error);
        res.status(500).send("Error al eliminar el usuario");
    }
};
