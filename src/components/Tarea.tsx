import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

type Props = {
    tarea: { texto: string, completado: boolean }
    borrarTarea: () => void
    toggleCompletada: () => void
}

export const Tarea = ({tarea, borrarTarea, toggleCompletada}: Props) => {
    return (
        <div className="task">
            <input type="checkbox" checked={tarea.completado} onClick={toggleCompletada}/>
            <span className={tarea.completado ? "task-completed" : "task-name"}>{tarea.texto}</span>
            <button className="btn-taskDelete" onClick={borrarTarea}><FontAwesomeIcon icon={faTrashCan} size='xl'/></button>
        </div>
    )
}