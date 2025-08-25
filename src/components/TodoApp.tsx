import { useState } from "react"
import { ListaTareas } from "./ListaTareas";

export const TodoApp = () => {

    type typeTarea = { texto: string, completado: boolean }

    const [nuevaTarea, setNuevaTarea] = useState<string>("");
    const [listaTareas, setListaTareas] = useState<typeTarea[]>([]);

    const handleAgregarTarea = () => {
        if(nuevaTarea.trim() === "") return
        setListaTareas(antiguasTareas => [...antiguasTareas, { texto: nuevaTarea, completado: false }]);
        setNuevaTarea("");
    }

    const handleEliminarTarea = (index: number) => {
        setListaTareas(tareas => tareas.filter((_,i) => i != index ))
    }

    const handleTareaCompletada = (index: number) => {
        setListaTareas(listaTareas.map((t,i) => i == index ? {...t, completado: !t.completado} : t))
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
                <ListaTareas listaTareas={listaTareas} borrarTarea={handleEliminarTarea} toggleCompletada={handleTareaCompletada}></ListaTareas>
            </div>
        </div>
    )
}