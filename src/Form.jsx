import React, { useState } from 'react';
var attendance = [];
export default function Form() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');
    
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [date, setDate] = useState('');

    function handleIdChange (event) {
        setId(event.target.value);
    };

    function handleNameChange (event)  {
        setName(event.target.value);
    };

    function handleCourseChange (event)  {
        setCourse(event.target.value);
    };

    function handleAgeChange (event)  {
        setAge(event.target.value);
    };

    function handleGenderChange (event)  {
        setGender(event.target.value);
    };

    function handleDateChange (event)  {
        setDate(event.target.value);
    }

    function addAttendance(){
        attendance.push({
            id: id,
            name: name,
            course: course,
            age: age,
            gender: gender,
            date: date
        })
        alert("Attendance Added!");
        setId(0);
        setName('');
        setCourse('');
        setAge(0);
        setGender('');
        setDate(0);
    }




    return (
        <>
            <h1>Student Attendance Information Form</h1>
            <div className="form-container">
                Id Number: <input type="text" value={id} onChange={handleIdChange} /> <br />
                Name: <input type="text" value={name} onChange={handleNameChange} /> <br />
                Course: <input type="text" value={course} onChange={handleCourseChange} /> <br />
                Age: <input type="number" value={age} onChange={handleAgeChange} /> <br />
                Gender: 
                <label> Male <input type="radio" name="gender" value="male" checked={gender === "male"} onChange={handleGenderChange} /></label>
                <label> Female <input type="radio" name="gender" value="female" checked={gender === "female"} onChange={handleGenderChange} /></label><br/>
                Date: <input type="date" value={date} onChange={handleDateChange} /> <br />

                <div className="card-container">
                    <h2>Student to be added: </h2>
                    <p>Student Id Number: <strong>{id}</strong></p>
                    <p>Student Name: <strong>{name}</strong></p>
                    <p>Student Course: <strong>{course}</strong></p>
                    <p>Student Age: <strong>{age}</strong></p>
                    <p>Student Gender: <strong>{gender}</strong></p>
                    <p>Date of Attendance: <strong>{date}</strong></p>
                </div>
                <button onClick={addAttendance}>Submit</button>
            </div>
        </>
    )
}