import React, { useState, useRef } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FiEye, FiEyeOff } from 'react-icons/fi';

function Register() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [cfmPassword, setCfmPassword] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [cfmToggle, setCfmToggle] = useState(false);
    const [passwToggle, setPasswToggle] = useState(false);
    const passwordInput = useRef();
    const cfmPasswordInput = useRef();

    const togglePassword = () => {
        setPasswToggle(!passwToggle);
        if (passwordInput.current.type === "password") {
            passwordInput.current.type = "text"
        } else{
            passwordInput.current.type = "password";
        }
    }

    const toggleCfmPassword = () => {
        setCfmToggle(!cfmToggle);
        if (cfmPasswordInput.current.type === "password") {
            cfmPasswordInput.current.type = "text"
        } else{
            cfmPasswordInput.current.type = "password";
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:8000/api/user/add-user", {
            email,
            password
        }).then(res => console.log(res)).catch(err => console.log(err));
    }

    return (
         <div className="flex h-full">
            <div className="w-1/2 bg-login bg-red-500 text-white h-full">
                <div className="bg-blue-900 bg-opacity-50 h-full flex  flex-column justify-center items-center">
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
                <div className="w-full h-full bg-white m-auto flex justify-center items-center">
                    <form className="bg-white rounded px-8 pt-6 mt-1 w-4/5" onSubmit={handleSubmit}>
                        <div className="text-black mt-2 mb-6 text-center">
                            <h1 className="text-3xl font-bold">Let's get started</h1>
                            <p className="text-sm">Create an account to connect with your friends</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
                            Firstname
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
                                placeholder="Enter Firstname"
                                value={firstname}
                                onChange={(e) => {
                                    e.preventDefault();
                                    setFirstname(e.target.value);
                                }}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
                            Lastname
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
                                placeholder="Enter Lastname"
                                value={lastname}
                                onChange={(e) => {
                                    e.preventDefault();
                                    setLastname(e.target.value);
                                }}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
                            Email
                            </label>
                            <input
                                className="
                                shadow appearance-none
                                border rounded w-full
                                py-4 px-3 text-gray-700
                                leading-tight 
                                focus:outline-none
                                focus:shadow-outline"
                                type="email"
                                placeholder="Enter Email orEmail"
                                value={email}
                                onChange={(e) => {
                                    e.preventDefault();
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>
                        <div className="mb-4">
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
                                {passwToggle ? <FiEyeOff size="20px" /> : <FiEye size="20px" />}
                            </span>
                            {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
                        </div>
                        <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
                            Confirm Password
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
                                value={cfmPassword}
                                ref={cfmPasswordInput}
                                onChange={(e) => {
                                    e.preventDefault();
                                    setCfmPassword(e.target.value);
                                }}
                            />
                             <span className="toggle-password-icon" onClick={toggleCfmPassword}>
                                {cfmToggle ? <FiEyeOff size="20px" /> : <FiEye size="20px" />}
                            </span>
                            {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
                        </div>
                        <div className="text-center">
                            <button className="w-40 rounded-full bg-blue-700 hover:bg-blue-900 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline rounded-full" type="submit">
                            Create Account
                            </button>
                        </div>
                        <div className="my-5 text-center">
                            <p className="text-gray-900 text-sm">
                                Already have an account? {" "}
                                    <Link className="text-sm text-blue-700 hover:text-black" to="/">
                                    Sign in
                                    </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
