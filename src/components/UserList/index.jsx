import "../../App.css";
import React, { useState } from "react";

function UserList({ users }) {
  const [rel, setRel] = useState([]);
  const [clicked, setClicked] = useState("");
  const clickElem = (user) => {
    if (clicked === user.id) {
      setRel([]);
      setClicked("");
      return;
    }
    setRel(user.relations);
    setClicked(user.id);
  };
  return (
    <div className="App">
      {users.map((item) => (
        <div
          className={
            "rozmir " +
            (rel.includes(item.id)
              ? "green"
              : clicked === item.id
              ? "orange"
              : "")
          }
          key={item.id}
          onClick={() => clickElem(item)}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
}

export default UserList;
