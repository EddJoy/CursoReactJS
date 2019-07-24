import React, {Component} from 'react';

class Contador extends Component{
    constructor (props) {
        super(props)
        this.state = {contador: this.props.contadorInicial }
        setInterval(() => {
            this.setState({contador: this.state.contador + 1})
        }, 1000/* tiempo que dura el cambio */)
    }
    render () {
        console.log('ContadorNumero render()')
        return <ContadorNumero numero={this.state.contador} />
    }
}
Contador.defaultProps = {
    contadorInicial: 0
}

class ContadorNumero extends Component {
    render() {
        return <span>{this.props.numero}</span>
    }
}

class App2 extends Component {
    render() {
        return(
            <div className="App">
                <p>Primer componente con state</p>
                <Contador contadorInicial={100}/>
            </div>
        );
    }
}

export default App2;