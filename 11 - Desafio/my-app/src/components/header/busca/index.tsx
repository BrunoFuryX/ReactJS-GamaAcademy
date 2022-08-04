import React from 'react';

function Buscar(props: any) {

    return (
        <>
            <input type="text" placeholder='Buscar por nome' value={props.search} onChange={(e) => props.setSearch(e.target.value)}/>
        </>
    )
}

export default Buscar;
