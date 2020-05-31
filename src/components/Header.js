import React, { useEffect, useState } from 'react';

const Header = ({ taskData,noCompTasks }) => {
    const [status, setStatus] = useState("NOT STARTED");

    useEffect(() => {
        if (noCompTasks.length === taskData.tasks.length) {
            return setStatus("COMPLETED");
        } else if (noCompTasks.length > 0) {
            return setStatus("IN PROGRESS");
        } return setStatus("NOT STARTED");
    }, [taskData.tasks]);


    return (
        <header className="main-header">
            <h1>{taskData.name}:</h1><h2 className="completion-status">{status}</h2>
        </header>
    )
}

export default Header;