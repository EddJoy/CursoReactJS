//Importacion de dependencias y renders
import React, {Component} from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';

//function Hello (props){
//  return <h2>{props.title}</h2>
//}

//const Hello = (props) => <h2>{props.title}</h2>

class Hello extends Component{
  render(){
    return <h2>{this.props.title}</h2>
  }
}

class Text extends Component{
  render(){
    const { 
      boolean, 
      isActivated, 
      arrayOfNumbers, 
      multiply, 
      objectWithInfo,
      title
    } = this.props

    const textoSegunBool = boolean ? 'Cierto' : 'Falso'
    const textoActivated = isActivated ? 'On' : 'Off'
    const mappedNumbers = arrayOfNumbers.map(multiply)
    return(
      <div>
        {title}
        <p>{this.props.arrayOfNumbers.join(', ')}</p>
        <p>{textoActivated}</p>
        <p>{textoSegunBool}</p>
        <p>{mappedNumbers.join(', ')}</p>
        <p>{this.props.text}</p>
        <p>{this.props.number}</p>
        <p>{objectWithInfo.key}</p>
      </div>
    )
  }
}

function App() {
  //Esto en JSX. Sintaxis XML que recuerda al HTML pero que se preprocesa y se convierte en Javascript
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Hello title='Hello from props'/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        <Text 
        arrayOfNumbers = {[2, 3, 10]}
        isActivated
        boolean={false}
        multiply={(number) => number * 4}
        number={2} 
        objectWithInfo={{key: 'First Value', key2: 'otherValue'}}
        text='Texto en string' 
        title={<h1>Este es el titulo</h1>}
        />

        <h1 /*Agregado para pruebas de render*/>Vamos a aprender React JS</h1>
        <h3 /*Agregado para pruebas de render*/>Esto se refrescara en tiempo real?</h3>
        <h4 /*Agregado para pruebas de render*/>Asies xdXDXDxxd</h4>
      </header>
    </div>
  );
}

export default App;
