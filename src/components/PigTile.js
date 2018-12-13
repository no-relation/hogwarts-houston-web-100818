import React from 'react'

export class PigTile extends React.Component {

    render() {
        console.log(this.props.pig)
        return (
            <div className='ui eight wide column'>
                <img src={this.props.pig.image} alt={this.props.pig.name + ' picture'} title = {this.props.pig.name} ></img>
            </div>
        )
    }
}