import { useState } from "react"
import { ListaTareas } from "./ListaTareas";

export const TodoApp = () => {

    const [nuevaTarea, setNuevaTarea] = useState<string>("");
    const [listaTareas, setListaTareas] = useState<string[]>([]);

    const handleAgregarTarea = () => {
        if(nuevaTarea.trim() === "") return
        setListaTareas((antiguasTareas) => [...antiguasTareas, nuevaTarea]);
        setNuevaTarea("");
    }

    const handleEliminarTarea = (index: number) => {
        setListaTareas(tareas => tareas.filter((_,i) => i != index ))
    }

    return (
        <div className="box-general">
            <div className="card">
            <h1 id="title">To Do List</h1>
                <div className="box-interactive">
                    <input
                    type="text"
                    value={nuevaTarea}
                    onChange={(e) => {setNuevaTarea(e.target.value)}}
                    placeholder="write your task..."
                    />
                    <button className="btn-add" onClick={handleAgregarTarea}>Add</button>
                </div>
                <ListaTareas listaTareas={listaTareas} borrarTarea={handleEliminarTarea}></ListaTareas>
            </div>
        </div>
    )
}