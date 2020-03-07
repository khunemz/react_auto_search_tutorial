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
            suggestions: [] , 
            text: ''
        };

        this.onTextChanged = this.onTextChanged.bind(this);
        this.renderSuggestions = this.renderSuggestions.bind(this);
        this.suggestionsSelected = this.suggestionsSelected.bind(this);
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
            suggestions: suggestions , text: value
        }));
    }

    suggestionsSelected (value) {
        this.setState(()=> ({
            text: value ,
            suggestions: []
        }));
    }

    renderSuggestions() {
        const {suggestions} = this.state;
        if(suggestions.length === 0 ) {
            return null;
        }

        return (

            <ul className="list-group">
                {suggestions.map((item) => <li className="list-group-item" onClick={()=> this.suggestionsSelected(item)}>{item}</li>)}
            </ul>
        );
    }

    render() {
        const {text} = this.state;
        return (
            <div>
                <h4>AutoCompleteText</h4>
                <br />
                <input className="form-control" value={text} type="text" name="name" 
                    onChange={this.onTextChanged} />
                {this.renderSuggestions()}
            </div>
        )
    }
}
