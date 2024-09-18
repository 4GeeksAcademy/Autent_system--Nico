import React, { useEffect} from "react";
import { useNavigate } from "react-router-dom";

export const PrivateView = () => {
    const navigate = useNavigate ();


useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (!token){
        navigate('/login');
    }
}, [navigate]);

const handleLogOut = () => {
    sessionStorage.removeItem('token');

    navigate('/LogIn');
};

return (
    <div>
        <h2>Private View!</h2>
        <button onClick={handleLogOut} className="btn btn-danger"> Log Out </button> 
    </div>
);
};

export default PrivateView;