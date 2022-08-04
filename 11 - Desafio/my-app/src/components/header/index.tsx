import React, { useState } from 'react';
import Buscar from './busca';
import Minicart from './minicart';

function Header(props: any) {
    const [ search, setSearch ] = useState('')

    return (
        <header className="header">
            <Buscar search={search} setSearch={setSearch}/>
            <Minicart />
        </header>
    )
}

export default Header;
