import React, { useState } from "react";

export const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(process.env.BACKEND_URL + "/api/login",{
            method:'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });

        if (response.ok) {
            const { token } = await response.json();
            sessionStorage.setItem('token', token);
            window.location.href = '/PrivateView';
        } else {
            const result = await response.json();
            setError(result.msg);
        }    
    };

    return (
        <form onSubmit={handleSubmit}>
  <div classNameName="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required  className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

)}


