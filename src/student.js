import React from 'react'

function Student(props){
     return(
        <div>
            <p>The name of first student is {props.student1}</p>
            <hr />
            <p>The name of second student is {props.student2}</p>
            <hr />
            <p>Both of them love {props.dishName}</p>
       </div>)
}

export default Student;