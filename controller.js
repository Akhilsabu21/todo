import schema from './user.model.js';

export function addTask(req,res)
{

    const {task}=req.body;
    console.log(task);
    res.status(201).send(schema.create({task}))
  
}
export async function listTask(req,res)
{
    const data = await schema.find();
    res.status(200).send(data);
}