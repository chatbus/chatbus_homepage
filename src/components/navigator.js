import * as React from "react";
const Navigator = ({ menu }) => {
  return (
    <div>
        <ul>{menu.map((value, index) => (<li key={index}>{value}</li>))}</ul>
    </div>
  );
};

export default Navigator;
