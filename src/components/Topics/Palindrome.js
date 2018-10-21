import React, {Component} from 'react';

class Palindrome extends Component{
    constructor(){
        super()

        this.state = {
            userInput:'',
            palindrome:''
        }
    }

    userInput(e){
        let input = e.target.value
        this.setState({
            userInput : input
        })
        console.log(input);
    }
    isPalindrome(val){
        // convert string to array
        let array1 = val.split('');
        let array2 = array1.slice().reverse();
        for(let i=0;i<array1.length;i++){
            if(array1[i] != array2[i]){
                // console.log(false)
                this.setState({ palindrome: 'false' });
            }
            else{
                // console.log(true)
                this.setState({ palindrome: 'true' });
            }
        }

    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={e => this.userInput(e)}/>
                <button className="confirmationButton" onClick={()=> this.isPalindrome(this.state.userInput)}>Palindrome Check</button>
                <span className="resultsBox">{this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome
