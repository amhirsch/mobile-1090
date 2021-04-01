import React from 'react'

export default function ViewAuthority({hostname, port, setIsEditingAuthority}) {
    function handleSubmit(e) {
        e.preventDefault();
        setIsEditingAuthority(true);
    }
    return (
        <div>
            <p>{`${hostname}:${port}`}</p>
            <form onSubmit={handleSubmit}>
                <input type='submit' value='Edit'/>
            </form>
        </div>
    )
}