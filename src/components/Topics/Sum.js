import React, {Component} from 'react';

class Sum extends Component{
    constructor(){
        super()
        
        this.state = {
            number1 : 0,
            number2 : 0,
            sum : null
        }

    }

    userInput1(e){
        let input = e.target.value
        this.setState({
            number1 : parseInt(input)
        })
    }
    userInput2(e){
        let input = e.target.value
        this.setState({
            number2 : parseInt(input)
        })
    }
    handleClick(num1,num2){
        console.log(this.state.number1)
        console.log(this.state.number2)
        this.setState({
            sum : num1+num2
        })
    }

    render(){
        return(
            <div className="puzzleBox sumPB">
            <h4>Sum</h4>
                <input className="inputLine" onChange={e => this.userInput1(e)}/>
                <input className="inputLine" onChange={e => this.userInput2(e)}/>
                <button className="confirmationButton" onClick={()=> this.handleClick(this.state.number1, this.state.number2)}>Add Numbers</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum

