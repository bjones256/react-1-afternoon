import React, {Component} from 'react';

class EvenAndOdd extends Component{
    constructor(){
        super()

        this.state ={
            evenArray:[],
            oddArray:[],
            userInput:''
        }
    }
    userInput(e){
        console.log('user is typing shit in')
        let input = e.target.value
        this.setState({
            userInput : input
        })
        console.log(input)
    }
    handleClick(){
        console.log('user hit the button')
        // create a function here to determine which array and push to proper array
        let {evenArray,oddArray} = this.state
        let evenArr = this.state.evenArray
        let oddArr = this.state.oddArray
        let split = this.state.userInput.split(',')
        console.log(split)
        split.forEach( e => e % 2 === 0 ? evenArr.push(e) : oddArr.push(e))
        this.setState({
            evenArray : evenArr,
            oddArray : oddArr
        })
       
    }
        render(){
            console.log(this.state.evenArray)
            return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={e => this.userInput(e)}/>
                <button className="confirmationButton" onClick={()=> this.handleClick()}>Split</button>
                <span className="resultsBox">Evens: [{this.state.evenArray}]</span>
                <span className="resultsBox">Odds: [{this.state.oddArray}]</span>
            </div>        )
        }
    
}

export default EvenAndOdd