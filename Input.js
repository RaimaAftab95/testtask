import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/actions/userActions";

const Input = () => {
    const [username, setUsername] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch (`https://api.github.com/users/${username}`);
            if (!response.ok)
            {throw new Error("User not found");
        }
        const data = await response.json();
        console.log("Data recieved from github api:", data);
        dispatch(setUser(data));
        } catch (error) {
            console.error("Error fetching user data:" ,error);
        }

    };

    return (
        <div className="conatainer text-center">
            <form onSubmit={handleSubmit}  className="row justify-content-center mb-4">
<div className="col-auto">
<input
type="text"
className="form-control w-20"
placeholder="Enter Github username"
value={username}
onChange={(e) => setUsername(e.target.value)}
/>
</div>
<div className="col-auto">
    <button className="btn btn-primary" type="submit">Search</button>
</div>
            </form>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
};

export default Input;