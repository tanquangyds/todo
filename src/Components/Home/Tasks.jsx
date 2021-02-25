import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import Card from './Card';

const Tasks = () => {
    const tasks = useSelector(state => state.tasks.tasks);
    const loading = useSelector(state => state.tasks.loading);
    const error = useSelector(state => state.tasks.error);
    return (
        <>
            {loading && <p>Loading...</p>}
            {tasks.length > 0 && tasks.map((task) => <Card task={task} key={task.id}/>)}
            {tasks.length === 0 && !loading && <p>No task available!</p>}
            {error && !loading && <p>{error}</p>}
            
        </>
    );
};

export default Tasks;