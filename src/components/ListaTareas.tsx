type Props = {
    listaTareas: string[]
    borrarTarea: (index: number) => void
}

export const ListaTareas = ({listaTareas, borrarTarea}: Props) => {
    return (
        <div>
            {listaTareas.map((tarea, index) => {
                // elemento tarea
            })}
        </div>
    )
}