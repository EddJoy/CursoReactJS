import React, {Component} from 'react'
import Forms from './sections/forms'
// antiguamente HTML
// <button onclick="alert('hi there')">...
// ahora estamos ultilizando el estilo de escritura camelcase

class App4 extends Component {
    constructor () {
        super()
        this.state = { mouseX: 0, mouseY: 0 }
        //this.handleMouseMove = this.handleMouseMove.bind(this)
    }

    handleMouseMove = (e) => {
        const { clientX, clientY } = e
        this.setState({ mouseX: clientX , mouseY: clientY })
    }

    handleClick (e) {
        console.log(e)
        console.log(e.nativeEvent)
        alert('Hi there!')
    }

    render () {
        return (
            <div className="App">
                <h4>Eventos</h4>
                <button onClick={this.handleClick}>Hi there!</button>
                <div 
                onMouseMove={this.handleMouseMove} 
                style={{ border: '1px solid #000', marginTop: 10, padding: 10}}>
                        <p>{this.state.mouseX}, {this.state.mouseY}</p>
                </div>

                <Forms />
            </div>
        )
    }
}


export default App4;