import React, { Component } from 'react'


class Box extends Component {
    render() {
        return(
            <div style={{ border: '1px solid #000', margin: 5, padding: 5 }}>
                {this.props.children}
            </div>
        )
    }
}

class App5 extends Component {
    render() {
        return(
            <div>
                <h4>La Prop especial Children</h4>
                <Box>Hola! Soy un children!</Box>
                <Box>Otro Box con otro contenido</Box>
            </div>
        );
    }
}

export default App5