import react, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const PrivateView = () => {
    const navigate = useNavigate ();


useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (!token){
        navigate('/login');
    }
}, [navigate]);

return (
    <div>
        <h2>Private View!</h2>
    </div>
);
};