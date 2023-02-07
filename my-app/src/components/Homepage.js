import React, { useState } from "react";
import "../App.css";
import Calendar from "react-calendar";

function Homepage() {
    const [value, onChange] = useState(new Date());
    return (
        <div className="main">
            <Calendar className="react-calender" onChange={onChange} value={value} />{" "}
            <p> {value.toString()} </p>{" "}
        </div>
    );
}

export default Homepage;
