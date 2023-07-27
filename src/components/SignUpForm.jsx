import { useState } from "react"

const SignUpForm = ({token, setToken}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (event) =>{
        event.preventDefault();
        console.log("HandleSubmit");
        try {
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', 
            { 
              method: "POST", 
              headers: { 
                "Content-Type": "application/json" 
              }, 
              body: JSON.stringify({ 
                username: username, 
                password: password 
              }) 
            })
            
            const result = await response.json();
            console.log(result);
            setToken(result.token)
        } catch (error) {
            setError(error.message)
        }
    }
    return(
        <>
            <h2>Sign Up</h2>
            {error && <p>{error}</p>} 
            <form onSubmit={handleSubmit}>
                <label value = {username} onChange={(e) => setUsername(e.target.value)}> Username: <input /> </label> 
                <br></br>
                <label value = {password} onChange={(e) => setPassword(e.target.value)}> Password: <input /> </label>
                <br></br>
                <button>Submit</button>
            </form>
        </>
    )
}

export default SignUpForm