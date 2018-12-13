import React from 'react'

export class PigTile extends React.Component {

    toggleInfo = () => {
        
    }

    render() {
        return (
            <div className='ui eight wide column card'>
                <img src={this.props.pig.image} 
                alt={this.props.pig.name + ' picture'} 
                title = {this.props.pig.name} 
                onClick = {this.toggleInfo}
                ></img>
                <h3>{this.props.pig.name}</h3>
            </div>
        )
    }
}