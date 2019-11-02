import React from "react";
import Item from "./Item";
export default function List(props) {
  return (
    <div className="cont red">
      {props.actions.map(item => (
           <Item key={item.id} desc={item.desc} amount={item.amount} />
           
      ))}
    </div>
  );
}
