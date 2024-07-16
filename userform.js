import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './userform.css'

const UserForm = () => {


    //inserting file into uploads folder
    const [file, setFile] = useState();

    const [user, setUser] = useState({
        username: '',
        age: '',
        gender: '',
        cgpa: '',
        skill: '',
        email:'',
        location: ''
        
    });

    const nav=useNavigate();

    const upload = () => {
        const formData = new FormData();
        formData.append('file', file);

        axios.post('http://localhost:5500/upload', formData)
            .then(res => {
                // Handle success if needed
                console.log('File uploaded successfully:', res);
                alert("uploaded succesfully")
                nav('/job')
            })
            .catch(err => {
                // Handle error
                console.log('Error uploading file:', err);
            });
    }

    

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5500/submit', user,);
            console.log(response.data);
            nav('/job')
        } catch (error) {
            console.error(error);
            nav('/job')
        }
    }

    return (
        <form className="user-form" onSubmit={handleSubmit}>
        <input className="form-input" type="text" name="username" value={user.username} onChange={handleChange} placeholder="Username" required />
        <input className="form-input" type="number" name="age" value={user.age} onChange={handleChange} placeholder="Age" required />
        <input className="form-input" type="text" name="gender" value={user.gender} onChange={handleChange} placeholder="Gender" required />
        <input className="form-input" type="number" name="cgpa" value={user.cgpa} onChange={handleChange} placeholder="CGPA" required />
        <input className="form-input" type="text" name="skill" value={user.skill} onChange={handleChange} placeholder="Skill" required />
        <input className="form-input" type="email" name="email" value={user.email} onChange={handleChange} placeholder="Enter Email" required />
        <label style={{paddingTop:"1rem", color:"gray"}}>Current Location:</label><input className="form-input" type="text" name="location" value={user.location} onChange={handleChange} plceholder="Current" required />
        <input className="form-input" type='file' placeholder='resume' onChange={(e) => setFile(e.target.files[0])} />
        <button className="upload-button" onClick={upload} type="button">First Click here after uploaded file </button>
        <button className="submit-button" type="submit" >Submit</button>
    </form>
    );
}

export default UserForm;
