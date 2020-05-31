import React from 'react'


const Task = ({ taskData }) => {

    const DATE_OPTIONS = {
        weekday: 'long',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: "numeric",
        minute: "numeric",
    }

    return (
        <section>
            {taskData.tasks.map((item, index) => {
                return (
                    <article key={item.name} className="task-wrapper">
                        <i className={item.isComplete ? "fas fa-check-circle completion-icon" : "far fa-check-circle completion-icon"}></i>
                        <header className="task-header">
                            <h2 className="task-name">{item.name}</h2>
                        </header>
                        <aside>
                            <p className="date-format">{(new Date(item.date)).toLocaleDateString('en-US', DATE_OPTIONS).replace(',', ' |')}</p>
                        </aside>
                        <p className="task-details">{item.description}</p>
                    </article>
                )
            })}
        </section>
    )
}

export default Task;
