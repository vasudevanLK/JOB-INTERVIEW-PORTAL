import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";


function Register() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [role, setRole] = useState();

    const nav=useNavigate();

    const handleSubmit=(e)=>{
      e.preventDefault();

      axios.post('http://localhost:5500/register',{name,email,password,role}).then(res=>{nav('/login')}).catch(err=>console.log(err))


    }
    return (
        <div className="d-flex justify-content-center align-items-center bg-white vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Register Here!</h2>
                <form onSubmit={handleSubmit}>
                <label htmlFor="name"><strong>Name:</strong></label>
                <input type="text" placeholder="Enter Name" autoComplete="on" name="name" className="form-control rounded-0" onChange={(e) => { setName(e.target.value) }} />
                
                <label htmlFor="email"><strong>Email</strong></label>
                <input type="email" placeholder="Enter Email" name="email" className="form-control rounded-0" onChange={(e) => { setEmail(e.target.value) }} />
                
                <label htmlFor="password"><strong>Password</strong></label>
                <input type="password" placeholder="Enter password" name="password" className="form-control rounded-0" onChange={(e) => { setPassword(e.target.value) }} />

                <label htmlFor="role"><strong>Role</strong></label> 
                <select name="role" className="form-control rounded-0" onChange={(e) => { setRole(e.target.value) }}> 
                    <option value="user">User</option> 
                    <option value="admin">Admin</option> 
                </select> 

                <button type="submit" className="btn btn-success w-100 rounded-0 mt-3">Register</button>
                <p>ALready have account? <Link to="/login" className="btn btn-default border w-100 bg-light" >login</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Register
