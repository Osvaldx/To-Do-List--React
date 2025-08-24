import { Tarea } from "./Tarea"

type Props = {
    listaTareas: string[]
    borrarTarea: (index: number) => void
}

export const ListaTareas = ({listaTareas, borrarTarea}: Props) => {
    return (
        <div className="task-list">
            {listaTareas.map((tarea, index) => (
                <Tarea key={index} tarea={tarea} borrarTarea={() => borrarTarea(index)}></Tarea>
            ))}
        </div>
    )
}