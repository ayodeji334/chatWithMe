import { Spinner } from '@chakra-ui/react'
import React from 'react'

function Loading() {
    return (
        <div className="loading" style={{
            width:"100%",
            display: "flex",
            justifyContent:"center",
            alignItems:"center",
            height:"inherit"
        }}>
            <Spinner 
                thickness="5px" 
                speed="0.65s" 
                emptyColor="gray.200" 
                color="red.500" 
                size="lg"
            />
        </div>
    )
}

export default Loading
