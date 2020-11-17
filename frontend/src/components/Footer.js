import React from 'react'

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
            <div>
                <p>
                    Copyright @ {year} chatWithMe. All Right Reserved.
                </p>
           </div>
       </footer>
    )
}

export default Footer
