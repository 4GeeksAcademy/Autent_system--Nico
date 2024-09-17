import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	const signUp = () => {
		navigate("/signUp");
	};

	const logIn = () => {
		navigate("/logIn");
	};

	return (
		<div className="text-center mt-5">
			<button type="button" className="btn btn-success btn-lg m-3" onClick={signUp}>Register</button>
			<button type="button" className="btn btn-success btn-lg m-3" onClick={logIn}>Log In</button>  
		</div>
	);
};
