import { useState } from "react";

const Authenitcate = ({token, setToken}) => {
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const handleClick = async() => {
        console.log(token)
        try {
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', 
                { 
                    method: "GET", 
                    headers: { 
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}` 
                    }
                })
            const result = await response.json();
            console.log(result);
            setSuccessMessage(result.message);
            
        } catch (error) {
            setError(error.message);
        }
    };
    return(
        <div>
            <h2>Authenticate</h2>
            <button onClick={handleClick}>Authenticate Token</button>
            {successMessage === "jwt malformed" ? <p>Please Enter a Username and Password!</p> : <p>{successMessage}</p>}
            {error && <p>{error}</p>}
        </div>
    );
}
export default Authenitcate