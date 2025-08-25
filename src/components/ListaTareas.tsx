import { Tarea } from "./Tarea"

type typeTarea = { texto: string, completado: boolean }

type Props = {
    listaTareas: typeTarea[]
    borrarTarea: (index: number) => void
    toggleCompletada: (index: number) => void
}

export const ListaTareas = ({listaTareas, borrarTarea, toggleCompletada}: Props) => {
    return (
        <div className="task-list">
            {listaTareas.map((tarea, index) => (
                <Tarea key={index} tarea={tarea} borrarTarea={() => borrarTarea(index)} toggleCompletada={() => toggleCompletada(index)}></Tarea>
            ))}
        </div>
    )
}