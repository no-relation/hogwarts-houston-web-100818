import React from 'react'
import { PigTile } from './PigTile.js'

export class PigList extends React.Component {

    constructor() {
        super()
        this.state = {
            pigs: []
        }
    }


    render() {
        return (
            <div className='ui grid container'>
                <h1>Pig List goes here</h1>
                < PigTile />
            </div>
        )
    }
}