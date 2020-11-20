import React from 'react'

function NoMessageSelected() {
    return (
        <div className="h-full w-full flex flex-col justify-center items-center">
            <h1 className="text-xl font-bolder"><strong>Please select a chat</strong></h1>
            <p className="text-muted">Select a chat from the left side to get started</p>
        </div>
    )
}

export default NoMessageSelected
