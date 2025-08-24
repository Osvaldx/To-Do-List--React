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
        <div>
            <h3>Lista de Tareas</h3>
            <div>
                <input
                type="text"
                value={nuevaTarea}
                onChange={(e) => {setNuevaTarea(e.target.value)}}
                placeholder="nueva tarea..."
                />
                <button onClick={handleAgregarTarea}>Agregar</button>
            </div>
            <ListaTareas listaTareas={listaTareas} borrarTarea={handleEliminarTarea}></ListaTareas>
        </div>
    )
}