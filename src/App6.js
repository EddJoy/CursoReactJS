import React, { Component } from 'react'
import Render from './sections/render'

class App6 extends Component {
    /* constructor por defecto
    constructor (...args) {
        super(...args)
    }
    */

    constructor (props) {
        console.log('constructor')
        super(props) // este método llama al constructor de Component
        // inicializar el state de nuestro componente
        this.state = { mensajeInicial: 'mensaje Inicial' }
        // bindeamos el contexto al método
        //this.handleClick = this.handleClick.bind(this)
        // Existe una forma más limpia de realizar lo anterior con las arrow function, como se muestra en el metodo handleClick.
    }

    handleClick = () => {
        this.setState({ mensajeInicial: 'mensaje cambiado' })
    }

    componentWillMount () {
        console.log('componentWillMount')
        this.setState({ mensajeInicial: 'mensaje modificado'})
    }

    render () {
        console.log('render')
        return(
            <div className="App6">
                <h4>Ciclo de montaje: constructor</h4>
                {this.state.mensajeInicial}
                <button onClick={this.handleClick}>
                    Cambiar mensaje
                </button>
                <br></br>
                <h4>Ciclo de montaje: componentWillMount</h4>
                <p>{this.state.mensajeInicial}</p>
                <br></br>
                <h4>Render</h4>
                <Render />
            </div>
        );
    }
}

export default App6;