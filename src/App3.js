import React, {Component} from 'react'
import ConditionalSection from './sections/conditional'
import cars from './data/cars.json'

class CarItem extends Component {
    render() {
        const { car, id } = this.props

        return (
            <li> 
                <p><strong>Key: </strong>{id}</p>
                <p><strong>Nombre: </strong>{car.name}</p>
                <p><strong>Marca: </strong>{car.company}</p>
            </li>
        )
    }
}

class App3 extends Component {
    render () {
        const numbers = [1, 2, 3, 4, 5]
        return (
            <div className="App">
                <ConditionalSection />
                <h4>Trabajando con listas</h4>
                {numbers.map((number, index) => {
                    return <p key={index}>Soy el numero {number}</p>
                })}
                <h4>Listado de objetos</h4>
                <ul /* ul para lista desordenada */>
                    {
                        cars.map(car => {
                            return <CarItem id={car.id} key={car.id} car={car} />
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default App3;