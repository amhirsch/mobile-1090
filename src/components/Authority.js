import React, { useState } from 'react'
import ViewAuthority from './ViewAuthority'
import SetAuthority from './SetAuthority'

export default function Authority(props) {
    const [isEditingAuthority, setIsEditingAuthority] = useState(false);
    return (
        <>
            {isEditingAuthority
                ? <SetAuthority
                    hostname={props.hostname}
                    setHostname={props.hostname}
                    port={props.port}
                    setPort={props.setPort}
                    isEditingAuthority={isEditingAuthority}
                    setIsEditingAuthority={setIsEditingAuthority} />
                : <ViewAuthority
                    hostname={props.hostname}
                    port={props.port}
                    setIsEditingAuthority={setIsEditingAuthority} />}
        </>
        
    )
}