import React, { useEffect, useState } from 'react';

const Header = ({taskData}) => {
    const [status, setStatus] = useState("NOT STARTED")
    const noCompTasks = taskData.tasks.filter(item => {
        if (item.isComplete) {
            return item
        }
    })
    useEffect(() => {
        if (noCompTasks.length === taskData.tasks.length) {
            return setStatus("COMPLETED");
        } else if (noCompTasks.length > 0) {
            return setStatus("IN PROGRESS");
        } return setStatus("NOT STARTED");
    }, taskData.tasks);

    return (
        <header className="main-header">
            <h1>{taskData.name}:</h1><h2 className="completion-status">{status}</h2>
        </header>
    )
}

export default Header;