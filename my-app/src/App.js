import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import Create from './components/Create';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Meeting from './components/Meeting';
import Edit from './components/Edit';

function App() {
    return ( <
        div >
        <
        BrowserRouter >
        <
        Navbar / >
        <
        Routes >
        <
        Route path = '/'
        element = { < Homepage / > }
        /> <
        Route path = '/add'
        element = { < Meeting / > }
        /> <
        Route path = '/create'
        element = { < Create / > }
        /> <
        Route path = '/edit'
        element = { < Edit / > }
        /> <
        /Routes>

        <
        /BrowserRouter>  <
        /div>
    );
}

export default App;