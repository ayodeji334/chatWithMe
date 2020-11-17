import React, { useRef, useState } from 'react'
import Axios from 'axios';
import { Link, useRouteMatch } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FiEye, FiEyeOff } from 'react-icons/fi';

function Login() {
    let { url } = useRouteMatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [toggle, setToggle] = useState(false);
    const passwordInput = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:8000/api/user/add-user", {
            email: username,
            password
        }).then(res => console.log(res)).catch(err => console.log(err));
    }

    const togglePassword = () => {
        setToggle(!toggle);
        if (passwordInput.current.type === "password") {
            passwordInput.current.type = "text"
        } else{
            passwordInput.current.type = "password";
        }
    }

    return (
         <div className="flex h-full w-full">
            <div className="w-1/2 md:w-full sm:w-full bg-login bg-red-500 text-white h-full">
                <div className="bg-blue-900 bg-opacity-75 h-full flex  flex-column justify-center items-center">
                    <div className="w-4/5">
                        <img className="m-auto my-3" src={logo} alt="logo" height="100" width="100" />
                        <h1 className="text-center my-3 font-bold text-xl">ChatWithMe App</h1>
                        <p className="my-5">
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut 
                            aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit 
                            in voluptate velit esse cillum dolore 
                            eu fugiat nulla pariatur. Excepteur 
                            sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt 
                            mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-1/2 h-full">
                <div className="w-full bg-white h-full m-auto flex justify-center items-center">
                    <form className="bg-white rounded px-8 pt-6 mt-1 w-4/5" onSubmit={handleSubmit}>
                        <div className="text-black mt-8 mb-6 text-center">
                            <h1 className="text-3xl font-bold">Welcome Back</h1>
                            <p className="text-sm">Login in to your existing account</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
                                Email or Username
                            </label>
                            <input
                                className="
                                shadow appearance-none
                                border rounded w-full
                                py-4 px-3 text-gray-700
                                leading-tight 
                                focus:outline-none
                                focus:shadow-outline"
                                type="text"
                                placeholder="Enter Email or Username"
                                value={username}
                                onChange={(e) => {
                                    e.preventDefault();
                                    setUsername(e.target.value);
                                }}
                            />
                        </div>
                        <div className="mb-1">
                            <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow 
                                appearance-none
                                border
                                rounded w-full py-4 px-3
                                text-gray-700 mb-3 leading-tight
                                focus:outline-none focus:shadow-outline"
                                type="password"
                                placeholder="Enter Password"
                                value={password}
                                ref={passwordInput}
                                onChange={(e) => {
                                    e.preventDefault();
                                    setPassword(e.target.value);
                                }}
                            />
                            <span className="toggle-password-icon" onClick={togglePassword}>
                                {toggle ? <FiEyeOff size="20px" /> : <FiEye size="20px" />}
                            </span>
                            {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
                        </div>
                        <div className="text-left mb-3">
                            <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="#">
                                Forgot Password?
                            </Link>
                        </div>
                        <div className="text-center">
                            <button className="w-40 shadow-lg rounded-full bg-blue-700 hover:bg-blue-900 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Login
                            </button>
                        </div>
                        <div className="my-6 text-center">
                            <p className="text-gray-900 text-sm">
                                Don't have an account? {" "}
                                    <Link className="text-sm text-blue-700 hover:text-black" to={`${url}register`}>
                                        Sign Up
                                    </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
