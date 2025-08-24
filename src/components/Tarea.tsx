type Props = {
    tarea: string,
    borrarTarea: () => void
}

export const Tarea = ({tarea, borrarTarea}: Props) => {
    return (
        <div>
            <span>{tarea}</span>
            <button onClick={borrarTarea}>X</button>
        </div>
    )
}