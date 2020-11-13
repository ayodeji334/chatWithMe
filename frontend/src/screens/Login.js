import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className="login-container bg-white flex mb-4">
            <div className="w-1/2 h-12">
                <h3>Welcome design .....</h3>
            </div>
            <div className="w-1/2 bg-gray-100 h-12">
                <div className="w-full">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="text-red.500 text-center text-lg">
                            <h3>Login Form</h3>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Email or Username" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter Password" />
                            <p className="text-red-500 text-xs italic">Please choose a password.</p>
                        </div>
                        <div className="text-right mb-4">
                            <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="#">
                                Forgot Password?
                            </Link>
                        </div>
                        <div className="text-center">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Sign In
                            </button>
                        </div>
                        <p className="text-center text-gray-500 text-xs mt-4 mb-4">
                            &copy;2020 chatWithMe. All rights reserved.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
