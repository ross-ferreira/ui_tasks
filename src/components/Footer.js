import React from 'react'

const Footer = ({taskData,noCompTasks}) =>{

    return(
        <footer>
            <h1>Progress:({Math.round((noCompTasks.length/taskData.tasks.length)*100)}%)</h1>
            <progress value={noCompTasks.length} max={taskData.tasks.length}></progress>
        </footer>
    )
}

export default Footer;