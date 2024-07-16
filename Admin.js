import React, { useEffect, useState } from 'react';
import './Admin.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'jspdf-autotable';
import jsPDF from 'jspdf';

function Admin() {
  const [user, setUser] = useState([]);
  const [acceptedUsers, setAcceptedUsers] = useState([]);
  const [rejectedUsers, setRejectedUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5500/users')
      .then(response => setUser(response.data))
      .catch(err => console.log("error in fetching", err));
  }, []);

  const handleAccept = (index) => {
    const acceptedUser = user[index];
    setAcceptedUsers([...acceptedUsers, acceptedUser]);
    setUser(user.map((u, i) => i === index ? { ...u, selected: true } : u));
  };

  const handleReject = (index) => {
    const rejectedUser = user[index];
    const isConfirmed = window.confirm(`Are you sure you want to reject ${rejectedUser.name}?`);
    if (isConfirmed) {
      setRejectedUsers([...rejectedUsers, rejectedUser]);
      setUser(user.filter((u, i) => i !== index));
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const title = 'Accepted Students';
    const textWidth = doc.getStringUnitWidth(title) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    const x = (pageWidth - textWidth) / 2;

    doc.text(title, x, 16);
    doc.autoTable({
      head: [['ID', 'Name', 'Email', 'Age', 'Gender', 'CGPA', 'Location']],
      body: acceptedUsers.map((user, index) => [
        index + 1, user.username, user.age, user.gender, user.cgpa,user.skill, user.location
      ]),
      startY: 20,
    });

    doc.save('accepted_students.pdf');
  };

  return (
    <div>
        <div className="navbar">
  <div className="logo">
    <img src="https://cdn-icons-png.freepik.com/512/8686/8686102.png" alt="Logo"/>
    <a href="/admin" style={{color: "white", textDecoration: "none"}}>ADMIN DASHBOARD</a>

  </div>
  <div className="menu">
    <a href="/">Dashboard</a>
  </div>
  <div className="perfil">
    <div className="contenido-perfil">
      <p>DEVA</p>
      <img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="Usuario"/>
    </div>
    <div className="desplegable">
      <a href="/admin">profile</a>
      <a href="/admin">Notifications</a>
      <a href="/admin">Settings</a>
    </div>
  </div>
  <div className="menu-toggle" onclick="toggleMenu()">
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>

<div className="contenedor contenido-principal" style={{padding:"3rem"}}>
  <div className="usuarios-barra" style={{padding:"1rem"}}>
    <h2>User Applications</h2><button style={{marginLeft:"5rem",backgroundColor:"lightgreen"}} id="nuevoUsuario"><i className="fas fa-plus" ></i><Link to='/JoblistingPage' >Create a job</Link></button>
  </div>
  <div className="busqueda-barra"><input id="nombre" type="search" placeholder="Buscar por Nombre Completo"/><button id="busquedaUsuario" disabled="" style={{marginLeft:"10px"}}>search</button></div>
  <table>
    <thead>
      <tr>
        <th>S.No</th>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
        <th>CGPA</th>
        <th>Skill</th>
        <th>Resume</th>
        <th>Location</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody id="tablaDatos">
            {user.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.cgpa}</td>
                <td>{user.skill}</td>
                <td><a href={`/uploads/${user.resume}`}>view resume</a></td>
                <td>{user.location}</td>
                <td>{user.email}</td>
                <td className="acciones">
                  {user.selected ? (
                    <div style={{ padding: "2px", display: "inline-block", alignItems: "column", justifyContent: "center" }}>
                      <span>&#10003; Selected</span>
                    </div>
                  ) : (
                    <>
                      <div style={{ padding: "2px", display: "inline-block", alignItems: "column", justifyContent: "center" }}>
                        <button className="botonEditar" onClick={() => handleAccept(index)}>Accept</button>
                      </div>
                      <button className="botonEliminar" onClick={() => handleReject(index)}>Reject</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
  </table>
  <div id="resumenTabla">
  <p>Accepted applications: <b>{acceptedUsers.length}</b></p>
  <p>Rejected applications: <b>{rejectedUsers.length}</b></p>
  <p>Total Applications <b>{user.length + acceptedUsers.length + rejectedUsers.length}</b></p>
  </div>
  <div className="paginacion"><button id="paginaAnterior"><i className="fas fa-arrow-left"></i></button>
    <div id="contador">page 1</div><button id="paginaSiguiente"><i className="fas fa-arrow-right"></i></button>
  </div>
  <button onClick={generatePDF}>Generate PDF</button>
</div>
        




    </div>
  )
}

export default Admin