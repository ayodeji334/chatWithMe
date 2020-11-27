import { useState } from 'react'

function ForgetPassword() {
    const [email, setEmail] = useState("");
    const error = false;
    const errorMessage = "error message";

    const handleSendResetPasswordEmail = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="bg-white w-full h-full py-4 px-6 md:px-3">
            <div className="mt-7 md:w-1/2 lg:w-44 py-6 rounded md:mx-auto md:h-80 h-full">
                <h2 className="text-3xl font-bolder">Forget Password</h2>
                <p className="py-3">Enter your email and we'll send you a link to reset your password</p>
                <form onSubmit={handleSendResetPasswordEmail}>
                    <input
                        className="
                        shadow appearance-none
                        border rounded w-full md:w-4/5
                        py-3 px-3 text-gray-700
                        leading-tight 
                        focus:outline-none
                        focus:shadow-outline"
                        type="text"
                        placeholder="Enter your email here"
                        value={email}
                        onChange={(e) => {
                            e.preventDefault();
                            setEmail(e.target.value);
                        }}
                        required
                    />
                    {error ? <p className="text-red-500 font-bold">{errorMessage}</p> : null}
                    <button
                        className="mt-4 py-3 w-40 shadow-lg rounded-full bg-gradient-to-r from-teal-400 to-blue-500 hover:from-red-400 hover:to-pink-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ForgetPassword
