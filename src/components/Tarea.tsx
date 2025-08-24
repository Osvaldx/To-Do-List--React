import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

type Props = {
    tarea: string,
    borrarTarea: () => void
}

export const Tarea = ({tarea, borrarTarea}: Props) => {
    return (
        <div className="task">
            <input type="checkbox" name="" id="" />
            <span className="task-name">{tarea}</span>
            <button className="btn-taskDelete" onClick={borrarTarea}><FontAwesomeIcon icon={faTrashCan} size='xl'/></button>
        </div>
    )
}