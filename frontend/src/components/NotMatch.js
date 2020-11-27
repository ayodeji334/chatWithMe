import React from 'react'
import { Link } from 'react-router-dom'

function NotMatch(props) {
    return (
        <div className="mx-auto flex items-center justify-center flex-col h-full">
            <h1 className="font-bolder text-6xl">Oops!</h1>
            <h6 className="font-bold text-2xl py-1">404 - PAGE NOT FOUND</h6>
            <p className="text-lg py-3">
                The page you are looking for might have been removed had its name 
                changed or is temporarly unavailable.
            </p>
            <Link
                className="mt-3 w-40 shadow-lg rounded-full bg-gradient-to-r from-teal-400 to-blue-500 hover:from-red-400 hover:to-pink-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
                 to="/"
                >
                Go to homepage
            </Link>
        </div>
    )
}

export default NotMatch
