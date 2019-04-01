import React, {Component} from 'react'

export default class EvenAndOdd extends Component{
    constructor(){
        super();

        this.state = {
        evenArray: [],
        oddArray: [],
        userInput: ''
        }
    }

    handleChange(val){
        this.setState({userInput: val})
    }

    assignEvenAndOdds(input){
        console.log('button press')
        let strArr = input.split(', ')
        let evens = []
        let odds = []
        for(let i = 0; i < strArr.length; i++){
            if(strArr[i] % 2 === 0){
                console.log(strArr)
                console.log(strArr[i])
               evens.push(strArr[i])
            } else {
                odds.push(strArr[i])
            }
        }

        this.setState({evenArray: evens, oddArray: odds});
    }

    render(){
        return (
            <div className='puzzleBox evenAndOddPB'>
            <h4> EvenAndOdd </h4>
            <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}/>
            <button className='confirmationButton' onClick={ () => {this.assignEvenAndOdds(this.state.userInput)}}>Da Button</button>
            <span className='resultsBox'> Evens: {JSON.stringify(this.state.evenArray)}</span>
            <span className='resultsBox'> Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}