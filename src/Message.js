import React from "react";

export default function Message(props) {
  const message = props.message;
  const username=props.username;
  const isuser = username===message.username
  
  const id = isuser ? 'carduser' : 'cardguest';
  return (
    <div>
        {/* <div className="card" id={id}>
          <div className="card-body">{message.username}:{message.message}</div>
        </div> */}
    </div>
  );
}
