import React from 'react'
// import { fridgeImg } from './fridgeImg'

export class PigTile extends React.Component {

    constructor() {
        super()
        this.state = {
            showInfo: false
        }
    }

    toggleInfo = () => {
        this.setState( { showInfo: !this.state.showInfo })
    }

    weightInFridges = (weight) => {

        // for (let i=0 ; i < Math.floor(weight) ; i++) {
        //     numFridges += <fridgeImg />
        // }

        return (
            // <fridgeImg />
            // <fridgeImg />            
            <span>Weight: {weight}</span>
        )
    }

    render() {
        if (this.state.showInfo) {
            return (
                <div className='ui five wide column card'>
                    <h3>Specialty: {this.props.pig.specialty} </h3>
                    {this.weightInFridges(this.props.pig['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])}
                    <h4>Highest Medal Won: {this.props.pig['highest medal achieved'] } </h4>
                    <img src={this.props.pig.image} height="125" width="125" alt={this.props.pig.id} onClick = {this.toggleInfo} ></img>
                    <h2>{this.props.pig.name}</h2>

                </div>
            )
        } else {
            return (
                <div className='ui five wide column card'>
                    <img src={this.props.pig.image} 
                    alt={this.props.pig.name + ' picture'} 
                    title = {this.props.pig.name} 
                    onClick = {this.toggleInfo}
                    ></img>
                    <h2>{this.props.pig.name}</h2>
                </div>
            )
        }
    }
}