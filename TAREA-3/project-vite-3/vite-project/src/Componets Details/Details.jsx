import React from 'react';

function Details(props) {
  
  return (
    <div>
        <p>
          <b></b> {props.genero}
        </p>
        <p>
          <b></b> {props.status}
        </p>
    </div>
  );
}
export default Details;