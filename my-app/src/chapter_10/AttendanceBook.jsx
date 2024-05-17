import React from "react";

const students = [
    {
        id: 1,
        name: "Nari",
    },
    {
        id: 2,
        name: "Maychell",
    },
    {
        id: 3,
        name: "Bongchu",
    },
    {
        id: 4,
        name: "Muffy",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;