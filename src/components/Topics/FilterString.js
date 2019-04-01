import React, {Component} from 'react'

export default class FilterString extends Component{
    constructor(){
        super()

        this.state = {
            unfilteredArray: ['the', 'array', 'has', 'been', 'filled', 'with', 'strings'],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val){
        this.setState({userInput: val})
    }

    assignFilterArr(char){
        let arr = this.state.unfilteredArray
        let newArr = []
        for(let i = 0; i < arr.length; i++){
            if(arr[i].includes(char)){
                newArr.push(arr[i])
            }
        }
        this.setState({filteredArray: newArr})
    }
    
    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4> FilterString </h4>
                <span className="puzzleText"> Original: {JSON.stringify(this.state.unfilteredArray)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.assignFilterArr(this.state.userInput)}>Da Button</button>
                <span className="resultsBox filterStringRB"> Result: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}