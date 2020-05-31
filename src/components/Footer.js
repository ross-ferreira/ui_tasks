import React from 'react'

const Footer = ({taskData}) =>{
    const noCompTasks = taskData.tasks.filter(item => {
        if (item.isComplete) {
            return item
        }
    })
    return(
        <footer>
            <h1>Progress:({Math.round((noCompTasks.length/taskData.tasks.length)*100)}%)</h1>
            <progress value={noCompTasks.length} max={taskData.tasks.length}></progress>
        </footer>
    )
}

export default Footer;