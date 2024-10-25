import Task from '../models/Task';

export const renderTasks = async(req, res)=>{
    const tasks = await Task.find().lean();
    res.render("index",{tasks:tasks});
}

export const createTask = async(req, res)=>{
    try {
        const task = Task(req.body);
        const taskSaved = await task.save();
        console.log(taskSaved);
        //console.log(req.body);
        //res.send("Tarea Guardada");
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
}

export const aboutTask = (req,res)=>{
    res.render("delete");
}

export const renderTaskEdit = async(req,res)=>{
    //console.log(req.params.id);
    const task = await Task.findById(req.params.id).lean();
    res.render("edit",{task});
}

export const editTask = async(req,res)=>{
    const{id} = req.params
    await Task.findByIdAndUpdate(id, req.body);
    //console.log(req.body);
    //res.send('Registro Editado');
    res.redirect('/')
}

export const deleteTask = async(req,res)=>{
    const{id} = req.params
    await Task.findByIdAndDelete(id);
    //res.send('Registro Eliminado');
    res.redirect('/');
}

export const doneTask = async(req,res)=>{
    const{id} = req.params;
    const task = await Task.findById(id);
    task.done = !task.done;
    await task.save();
    res.redirect("/");
}