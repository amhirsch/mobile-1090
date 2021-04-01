import React from 'react';

const HOSTNAME = 'hostname';
const PORT = 'port';

export default function SetAuthority(props) {
    function handleSubmit(e) {
        e.preventDefault();
        props.setIsEditingAuthority(false);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor={HOSTNAME}>Hostname: </label>
            <input type='text' htmlFor={HOSTNAME} name={HOSTNAME}
                value={props.hostname}
                onChange={(e) => props.setHostname(e.target.value)}/>
            <label htmlFor={PORT}>Port: </label>
            <input type='number' htmlFor={PORT} name={PORT}
                min={0} max={65535} value={props.port}
                onChange={(e) => props.setPort(e.target.value)} />
            <input type='submit' value='Set Hostname and Port'/>
        </form>
    )
}