import React, { useState } from 'react';
import axios from 'axios';

function Testing() {
    const [file, setFile] = useState();

    const upload = () => {
        const formData = new FormData();
        formData.append('file', file);

        axios.post('http://localhost:5500/upload', formData)
            .then(res => {
                // Handle success if needed
                console.log('File uploaded successfully:', res);
            })
            .catch(err => {
                // Handle error
                console.log('Error uploading file:', err);
            });
    }

    return (
        <div>
            <input type='file' placeholder='resume' onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={upload}>Upload</button>
        </div>
    );
}

export default Testing;
