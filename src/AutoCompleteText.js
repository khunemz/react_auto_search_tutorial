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
        // initialize state
        this.state = {
            suggestions: []
        };

        this.onTextChanged = this.onTextChanged.bind(this);
        this.renderSuggestions = this.renderSuggestions.bind(this);
    }

    onTextChanged(e) {
        let value =e.target.value;
        let suggestions = [];
        if (value.length === 0) {
            suggestions =[];
        } else {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = this.items.sort().filter(v=> regex.test(v));
            
        }

        this.setState(()=>({
            suggestions: suggestions
        }));
    }

    renderSuggestions() {
        const {suggestions} = this.state;
        if(suggestions.length === 0 ) {
            return null;
        }

        return (

            <ul>
                {suggestions.map((item) => <li>{item}</li>)}
            </ul>
        );
    }

    render() {
        return (
            <div>
                <h4>AutoCompleteText</h4>
                <br />
                <input type="text" name="name" 
                    onChange={this.onTextChanged} />
                {this.renderSuggestions()}
            </div>
        )
    }
}
