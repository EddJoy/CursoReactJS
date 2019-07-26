import React, { Component } from 'react'

const HelloRender = (props) => <h1>Hola render!</h1>

class Render extends Component {
    constructor (props) {
        console.log('constructor')
        super(props)
        this.state = { mensaje: 'otro mensaje' }
    }

    componentDidMount () {
        console.log('componentWillMount en render.js')
    }

    render() {
        console.log('render en render.js')
        // Se puede manejar el devolver null, para funciones especificas como tracking o scroll
        //return this.state.mensaje === 'mensaje inicial' ? 'sip!' : null
        // Al utilizar fragmentos o arreglos no olvidemos agregar una key para identificar cada elemento
        return [
            <h1 key='A'>Primer elemento</h1>,
            <HelloRender key='B'/>,
            <HelloRender key='C'/>,
            <h3 key='D'>Cuarto elemento</h3>
        ]
    }
}

class EjemploDeComponentDidMount extends Component {
    constructor (props) {
        console.log('constructor')
        super(props)
        this.state = { scroll: 0 }
        //debugger
    }

    componentWillMount () {
        console.log('componentWillMount')
        //debugger
    }

    componentDidMount () {
        console.log('componentDidMount')
        //debugger
        //this.setState({ otroState: '' })
        document.addEventListener('scroll', () => {
            this.setState({ scroll: window.scrollY })
        })
    }

    render() {
        console.log('render')
        //debugger
        return (
            <div>
                <h4>Ciclo de montaje: componentDidMount</h4>
                <p>El scroll es {this.state.scroll}</p>
                <p>Este componente nos muestra como podermos usar el componentDidMount</p>
                <p>Como queremos añadir un evento al scroll, vmaos a hacer que la ventana sea 
                    lo suficientemente grande como para que tenga que empujar el contenido hacia abajo y haga 
                    que no quepa todo el contenido en el alto de la página. De esta forma podremos utilizar el evento para controlar cuando el usuario está moviéndose por el scroll.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis orci a scelerisque purus semper eget duis. Massa ultricies mi quis hendrerit. Mauris a diam maecenas sed enim ut sem viverra aliquet. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Aenean euismod elementum nisi quis. Viverra accumsan in nisl nisi scelerisque eu. Venenatis urna cursus eget nunc scelerisque viverra mauris. Quam quisque id diam vel quam elementum. Molestie a iaculis at erat pellentesque adipiscing commodo. Velit scelerisque in dictum non. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Sit amet tellus cras adipiscing enim eu turpis egestas pretium.</p>
                <p>Est lorem ipsum dolor sit amet. Et magnis dis parturient montes nascetur ridiculus. Id porta nibh venenatis cras sed. Aliquet enim tortor at auctor urna. Euismod quis viverra nibh cras pulvinar. Lectus sit amet est placerat in egestas. Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna. Quis viverra nibh cras pulvinar. Est ultricies integer quis auctor elit sed vulputate mi sit. Eget nunc lobortis mattis aliquam faucibus purus in. Amet nisl purus in mollis nunc sed id semper risus. Nec feugiat in fermentum posuere urna nec. Euismod in pellentesque massa placerat duis ultricies. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Nam at lectus urna duis.</p>
                <p>Enim lobortis scelerisque fermentum dui faucibus in ornare quam. Dui nunc mattis enim ut tellus elementum sagittis vitae et. Morbi blandit cursus risus at ultrices. Dignissim suspendisse in est ante in nibh. Risus commodo viverra maecenas accumsan lacus. Urna duis convallis convallis tellus id interdum velit. Tempus quam pellentesque nec nam aliquam sem. A diam maecenas sed enim ut sem viverra aliquet eget. Purus in mollis nunc sed id semper risus. Morbi quis commodo odio aenean sed adipiscing diam. Arcu non sodales neque sodales ut etiam sit. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Fusce ut placerat orci nulla pellentesque dignissim enim.</p>

            </div>
        )
    }
}


export default EjemploDeComponentDidMount