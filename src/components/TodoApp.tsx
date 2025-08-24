import { useState } from "react"

export const TodoApp = () => {

    const [nuevaTarea, setNuevaTarea] = useState<string>("")

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
            </div>
        </div>
    )
}