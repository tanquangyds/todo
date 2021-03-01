import React, {useState} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import Card from './Card';
import './Task.css'

const Tasks = (props) => {
    const {deleteTask, updateTask} = props;
    const tasks = useSelector(state => state.tasks.tasks);
    const loading = useSelector(state => state.tasks.loading);
    const error = useSelector(state => state.tasks.error);
    const deleteCard = (idTask) => {
        deleteTask(idTask)
    }
    const handleUpdateTask = () => {
    }

    return (
        <div className="task">
            {loading && <p>Loading...</p>}
            {tasks.length > 0 &&tasks.map((task) => <Card updateTask = {handleUpdateTask} task={task} key={task.id} deleteCard={deleteCard}/>)}
            {tasks.length === 0 && !loading && <p>No task available!</p>}
            {error && !loading && <p>{error}</p>}
        </div>
    );
};

export default Tasks;