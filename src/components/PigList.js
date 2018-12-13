import React from 'react'
import { PigTile } from './PigTile.js'

export class PigList extends React.Component {

    render() {
        return (
            <div className='ui grid container cards'>
                {this.props.pigs.map((pig)=>(
                    < PigTile key={pig.id} pig={pig}/>
                ))}
            </div>
        )
    }
}