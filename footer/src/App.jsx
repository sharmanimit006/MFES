import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import PhotoPage from 'content/PhotoPage'
import "./index.css";
import Footer from './component/Footer';
import Playlist from "./component/Playlist";
const App = () => (
<div>
    <Navbar/>
    <PhotoPage/>
    <Playlist/>

<Footer/>
</div>
 
);
ReactDOM.render(<App />, document.getElementById("app"));
