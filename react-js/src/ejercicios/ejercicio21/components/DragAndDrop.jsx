
import { useState } from "react"
import "../components/drag_and-drop.css"
export const DragAndDrop = () => {
    const [tasks, setTasks] = useState([
        { 
            id: 1,
            title: 'Tarea 1',
            body: 'Desarrollo de software: Escribir código para crear aplicaciones y software funcional.',
            list: 1
        },
        { 
            id: 2,
            title: 'Tarea 2',
            body: 'Resolución de problemas: Encontrar soluciones técnicas para desafíos y errores.',
            list: 1
        },
        { 
            id: 3,
            title: 'Tarea 3',
            body: 'Mantenimiento y mejora del código: Revisar, corregir y actualizar el código existente.',
            list: 3
        },
        { 
            id: 4,
            title: 'Tarea 4',
            body: 'Colaboración y trabajo en equipo: Trabajar eficientemente con otros profesionales en proyectos conjuntos.',
            list: 2
        },
        { 
            id: 5,
            title: 'Tarea 5',
            body: 'Aprendizaje continuo: Mantenerse actualizado con las nuevas tecnologías y herramientas.',
            list: 2
        },
    ]);

    const getList = (list) => {
        return tasks.filter(item => item.list === list)
    }

    const startDrag = (evt, item) => {
        evt.dataTransfer.setData('itemID', item.id)
        console.log(item);
    }

    const draggingOver = (evt) => {
        evt.preventDefault();
    }

    const onDrop = (evt, list) => {
        const itemID = evt.dataTransfer.getData('itemID');
        const item = tasks.find(item => item.id == itemID);
        item.list = list;

        const newState = tasks.map(task => {
            if(task.id === itemID) return item;
            return task
        })

        setTasks(newState);
    }

    return (
        <>
            <h1>
                Arrastrar y Soltar &nbsp;
              </h1>
            <br/>

            <div className='drag-and-drop'>
                <div className='column column--1'>
                    <h3>
                        Tareas por hacer
                    </h3>
                    <div className='dd-zone' droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 1))}>
                        {getList(1).map(item => (
                            <div className='dd-element' key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                <strong className='title'>{item.title}</strong>
                                <p className='body'>{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='column column--2'>
                    <h3>
                        Tareas en progreso
                    </h3>
                    <div className='dd-zone' droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 2))}>
                        {getList(2).map(item => (
                            <div className='dd-element' key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                <strong className='title'>{item.title}</strong>
                                <p className='body'>{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='column column--3'>
                    <h3>
                        Tareas realizadas
                    </h3>
                    <div className='dd-zone' droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 3))}>
                        {getList(3).map(item => (
                            <div className='dd-element' key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                <strong className='title'>{item.title}</strong>
                                <p className='body'>{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DragAndDrop;