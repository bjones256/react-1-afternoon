import React, {Component} from 'react';

class FilterString extends Component{
    constructor(){
        super()

        this.state = {
            unFilteredArray : ['Brian','is','beginning','to','feel','dumb','.','Like','he','may','never','get','this','shit'],
            userInput : '',
            filteredArray : []
        }
    }
    userInput(e){
        let input = e.target.value
        this.setState({
            userInput : input
        })
        console.log(input);
    }

    handleClick(val){
        let before = this.state.unFilteredArray;
        let filtered = [];
        let sub = this.state.userInput;

        for(let i =0 ; i<before.length; i++){
            if(before[i].includes(sub)){
                filtered.push(before[i]);
            }
            this.setState({
                filteredArray: filtered
            })
        }
    }
    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray,null,10)}</span>
                <input className="inputLine" onChange={e => this.userInput(e)}/>
                <button className="confirmationButton" onClick={()=> this.handleClick(this.state.userInput)}>Filter String</button>
                <span className="resultsBox filterStringRB">{JSON.stringify(this.state.filteredArray,null,10)}</span>
            </div>
        )
    }
}

export default FilterString


// Create an onChange prop for the input element that updates the value of userInput on state.
// Create an onClick prop for the button element that calls a method on the class:
// This method should solve the toy problem.
// This method should update the value of filteredArray.
// Assign the first span element the value of unFilteredArray.
// Assign the last span element the value of filteredArray.