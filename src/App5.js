import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Box extends Component {
    render() {
        return(
            <div style={{ border: '1px solid #000', margin: 5, padding: 5 }}>
                {this.props.children}
            </div>
        )
    }
}

class Article extends Component {
    static propTypes = {
        author: PropTypes.string.isRequired
    }

    render () {
        const { author, children, date, title } = this.props

        return(
            <section>
                <h2>{title}</h2>
                {author && <p><em>Escrito por {author}</em></p>}
                <Box>{date}</Box>
                <article>
                    {children}
                </article>
            </section>
        );
    }
}


class App5 extends Component {
    render() {
        return(
            <div>
                <h4>La Prop especial Children</h4>
                <h4>PropTypes</h4>
                <Box>Hola! Soy un children!</Box>
                <Box>Otro Box con otro contenido</Box>
                
                <Article
                    author={true}
                    date={new Date().toLocaleDateString()}
                    title='Artículo sobre la prop children'>
                        <p>El contenido que envolvemos dentro del componente Article será enviado al componente como this.prop.children</p>
                        <strong>Y mantiene las etiquetas y componetes que hayas añadido dentro</strong>
                </Article>

                <Article
                    author='Miguel'
                    date={new Date().toLocaleDateString()}
                    title='Artículo 2'>
                        <p>El contenido que envolvemos dentro del componente Article será enviado al componente como this.prop.children</p>
                        <strong>Y mantiene las etiquetas y componetes que hayas añadido dentro</strong>
                </Article>

                <Article
                    author='Miguel'
                    date={new Date().toLocaleDateString()}
                    title='Otro artículo'>
                        <p>El contenido que envolvemos dentro del componente Article será enviado al componente como this.prop.children</p>
                        <strong>Y mantiene las etiquetas y componetes que hayas añadido dentro</strong>
                </Article>
            </div>
        );
    }
}

export default App5