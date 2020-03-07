import React, { Component } from 'react'

export default class AutoCompleteText extends Component {

    constructor (props) {
        super(props);
        this.items = [
            'Chutipong',
            'Roobklom' ,
            'Steve' , 
            'Jobs' , 
            'Sarah' , 
            'Jones'
        ];
    }
    render() {
        return (
            <div>
                <h4>AutoCompleteText</h4>
                <br />
                <input type="text" name="name" />
                <ul>
                    {this.items.map((item) => <li>{item}</li>)}
                </ul>
            </div>
        )
    }
}
