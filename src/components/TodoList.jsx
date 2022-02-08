import React, { useState } from "react";


function ToDoItem(props) {
  const [strike, setStrike] = useState(false);

  function handleClick() {
    setStrike((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <div
      onDoubleClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li
        style={{ textDecoration: strike ? "line-through" : null }}
        onClick={handleClick}
      >
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;

// Stricking out
// import React, { useState } from "react";

// function TodoList(props) {
//   const [strike, setStrike] = useState(false);

//   function handleClick() {
//     setStrike((prevValue) => {
//       return !prevValue;
//     });
//   }

//   return (
//     <li
// style={{ textDecoration: strike ? "line-through" : null }}
//     onClick={handleClick}
//     >
//       {props.text}
//     </li>
//   );
// }

// export default TodoList;
