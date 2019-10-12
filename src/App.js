import React from 'react';
import Nav from './components/Nav/Nav'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import FaceReg from './components/FaceReg/FaceReg'
import Rank from './components/Rank/Rank'
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Nav />
        <Logo />
        <Rank />
        <ImageLinkForm />
        <FaceReg />
      </div>
    );
  }
}

export default App;
