import React from 'react'

function Person(props) {
    return (
      <div>
        <h1>Name : {props.name}</h1>
        <h2>Last name : {props.lastname}</h2>
        <h3>Age : {props.age}</h3>
      </div>
    )
}

export default Person
