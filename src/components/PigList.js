import React from 'react'
import { PigTile } from './PigTile.js'

export class PigList extends React.Component {

    constructor() {
        super()
        this.state = {
            pigs: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/hogs')
            .then(resp => resp.json())
            .then(data => this.setState({pigs: data}))
    }

    render() {
        return (
            <div className='ui grid container'>
                {this.state.pigs.map((pig)=>(
                    < PigTile key={pig.id} pig={pig}/>
                ))}
            </div>
        )
    }
}