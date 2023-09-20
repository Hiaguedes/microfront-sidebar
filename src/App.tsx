import React from 'react';
import Sidebar from './Sidebar';

const App = () => {
    return(
    <Sidebar itens={[
        {link: 'teste1', name: 'Teste 1'}
    ]} />)
    
}

export default App;