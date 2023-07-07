import React, { useEffect, useState } from "react";
import TodoList from "../../components/TodoList";
import {
  useLocation,
  useMatch,
  useMatches,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import queryString from "query-string";

ListPage.prototypes = {};

function ListPage(props) {
  const initTodoList = [
    //props không thay đổi được --- initTodoList là giá trị ban đầu
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "Code",
      status: "new",
    },
  ];

  const location = useLocation();
  const [todoList, setTodoList] = useState(() => initTodoList);
  const [fillteredStatus, setFillteredStatus] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || "all";
  });

  const [search, setSearch] = useSearchParams();

  useEffect(() => {
    const params = queryString.parse(search.get("status"));
    setFillteredStatus(params || "all");
  }, [search]);

  const handleTodoClick = (todo, idx) => {
    //clone curent array to the new one
    const newTodoList = [...todoList];
    console.log(todo, idx);

    //toggle state
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "completed" ? "new" : "completed",
    };

    //update todo list
    setTodoList(newTodoList);
  };
  const handleShowAllClick = () => {
    setFillteredStatus("all");
    setSearch({ status: "all" });
  };

  const handleShowConpletedClick = () => {
    setFillteredStatus("completed");
    setSearch({ status: "completed" });
  };

  const handleShowNewClick = () => {
    setFillteredStatus("new");
    setSearch({ status: "new" });
  };

  const renderedTodoList = todoList.filter(
    (todo) => fillteredStatus === "all" || fillteredStatus === todo.status
  );

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />

      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowConpletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default ListPage;
