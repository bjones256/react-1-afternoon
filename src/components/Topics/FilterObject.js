import React, {Component} from 'react';

class FilterOject extends Component{
    constructor(){
        super()

        this.state ={
            unFilteredArray:[
                {
                    id: 1,
                    name: "Brian",
                    founder: true,
                    title: "CEO",
                    shares: 50000
                    
                },
                {
                    id: 5,
                    name: "Billy",
                    founder: true,
                    title: "COO",
                    shares: 10000
                    
                },
                {
                    id: 2,
                    name: 'Corben',
                    founder: true,
                    title: 'CTO',
                    shares: 10000

                },
                {
                    id: 3,
                    name: 'Paul',
                    title: 'Chief Custodial Engineer'
                },
                {
                    id: 4,
                    name: 'Cinnamon',
                    title: 'Masseuse',
                    isHot: 'Stupid Hot',
                    location: "Brian's Office"
                }

            ],
            userInput:'',
            filteredArray:[]
        }
    }

        userInput(e){
            let input = e.target.value
            this.setState({
                userInput : input
            })
            // console.log(input);
        }

        handleClick(prop){
           let before = this.state.unFilteredArray;
           let filtered = [];

           for(let i = 0; i < before.length; i++){
               if(before[i].hasOwnProperty(prop)){
                   filtered.push(before[i]);
               }
           }
           console.log(filtered)
           this.setState({ filteredArray: filtered });
        }
    
    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: <br/>{ JSON.stringify(this.state.unFilteredArray, null, 10) }</span>
                <input className="inputLine" onChange={e => this.userInput(e)}/>
                <button className="confirmationButton" onClick={()=> this.handleClick(this.state.userInput)}>Filter Object</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray,null,10)}</span>
            </div>
        )
    }
}

export default FilterOject