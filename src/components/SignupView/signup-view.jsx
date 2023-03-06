import { useState } from "react";

export const SignupView = () => {

    const [signUpName, setSignUpName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            Signupname: signUpName,
            Username: userName,
            Password: password,
            Email: email
        };
        fetch("SIGNUP_URL", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        }).then((response) => {
            if (response.ok) {
                alert("Signup successful");
                window.location.reload();
            } else {
                alert("Signup failed");
            }
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={signUpName} onChange={(e) => setSignUpName(e.target.value)} required />
            </label>
            <label>
                Username:
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <button type="submit">Submit</button>
        </form>
    );

}

{/* <form onSubmit={handleSubmit}>
    
</form> */}