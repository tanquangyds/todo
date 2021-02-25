import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTasks, addTasks } from "../redux/actions/tasks";

import Tasks from "../Components/Home/Tasks";
import Search from "../Components/Home/Search";
import Pagination from "../Components/Home/Pagination";

const Homepage = () => {
  const dispatch = useDispatch();

  const [filter, setFilter] = useState({
    _page: 1,
    _limit: 2,
    title_like: "",
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
      title_like: searchTerm,
    };
    setFilter(newFilter);
    dispatch(getTasks())
  };

  const handelAddTask = () => {
    console.log("Was Click");
    dispatch(
      addTasks({
        title: "Test12",
        creator: "Quang",
        desc: "Học HTML qua Sách",
      })
    );
  };

  return (
    <div>
      <h1>Todo List App</h1>
      <Search onSubmit={handleSubmitTitle} />
      <Tasks></Tasks>
      <Pagination pagination={filter} onClick={handleChangePage} />
      <button onClick={handelAddTask}>Add</button>
    </div>
  );
};

export default Homepage;
