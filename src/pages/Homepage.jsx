import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTasks, addTasks, deleteTask } from "../redux/actions/tasks";

import Tasks from "../Components/Home/Tasks";
import Search from "../Components/Home/Search";
import Pagination from "../Components/Home/Pagination";
import TodoForm from '../Components/Home/TodoForm';

const Homepage = () => {
  const dispatch = useDispatch();

  const [filter, setFilter] = useState({
    _page: 1,
    _limit: 10,
    title_like: "",
    _sort: 'id',
    _order: 'desc'
  });
  useEffect(() => {
    dispatch(getTasks(filter));
  }, [filter]);

  const handleChangePage = (page) => {
    console.log(page);
    const newFilter = {
      ...filter,
      _page: page,
    };
    setFilter(newFilter);
  };

  const handleSubmitTitle = (searchTerm) => {
    console.log(searchTerm);
    const newFilter = {
      ...filter,
      _page: 1,
      title_like: searchTerm,
    };
    setFilter(newFilter);
    
  };

  const handleAddTask = (task) => {
    dispatch(
      addTasks(task)
    );
    dispatch(getTasks(filter));
  };

  const handleUpdateTask = (taskUpdate) => {
    console.log('updateTask', taskUpdate)
    dispatch(
      addTasks(taskUpdate)
    );
    dispatch(getTasks(filter));
  }

  const handleDeleteTask = (idTask) => {
    dispatch(
      deleteTask(idTask)
    );
    dispatch(getTasks(filter));
  }
  return (
    <div>
      <h1>Todo List App</h1>
      <Search onSubmit={handleSubmitTitle} />
      <TodoForm onSubmit={handleAddTask}/>
      <Tasks deleteTask={handleDeleteTask} updateTask = {handleUpdateTask}></Tasks>
      <Pagination pagination={filter} onClick={handleChangePage} />
    </div>
  );
};

export default Homepage;
