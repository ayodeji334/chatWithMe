import React from 'react'

function Register() {
    return (
        <div className="register-container">
            <form>
                <label>Emal or Username</label>
                <input type="text" placeholder="enter email or username" />
                <label>Password</label>
                <input type="password" placeholder="Enter Password" />
                <label>Confirm Password</label>
                <input type="password" placeholder="Enter Password" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Register
