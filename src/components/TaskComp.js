import {FaTimes } from 'react-icons/fa'

const TaskComp = ({task, onDelete, onToggle}) => {
    return(
        <div className= {`task ${task.remainder ? 'remainder': ''}`} 
        onDoubleClick= {() => onToggle(task.id)}>
            <h3>
                {task.text} <FaTimes style={{color:'red', cursor: 'pointer'}}
                onClick={() => onDelete(task.id )}/>
            </h3>
            <p>{task.day}</p>

        </div>
    )
}

export default TaskComp