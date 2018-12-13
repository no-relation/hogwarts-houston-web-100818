import React from 'react'

export class SortForm extends React.Component {

    sortingBy = (param)=>{
        if (param === 'weight'){
            this.props.sortOrFilterPigs('weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water')
        } else {
            this.props.sortOrFilterPigs(param)
        }
    }

    render() {
        return(
            <form onChange={e => this.sortingBy(e.target.value)} className="ui form" >
                <div className="fields">
                    <div className='four wide field'>
                        <select className='ui search dropdown'>
                            <option value="">Sort by:</option>
                            <option value='name'>Name</option>
                            <option value='weight'>Weight</option>
                        </select>
                    </div>
                    <div className='four wide inline field'>
                        <select className='ui search dropdown'>
                            <option value="">Greased or Ungreased?</option>
                            <option value='true'>Greased</option>
                            <option value='false'>Ungreased</option>

                        </select>
                    </div>
                    <div className='inline field'>
                        <button className="ui button">Reset</button>
                    </div>
                </div>
            </form>
        )
    }
}