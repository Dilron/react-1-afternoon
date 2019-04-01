import React, {Component} from 'react'

export default class Sum extends Component{
    constructor(){
        super()
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handle1Change(val){
        this.setState({number1: val})
    }
    
    handle2Change(val){
        this.setState({number2: val})
    }

    addSums(num1, num2){
        console.log('ping button press')
        let unNum1 = Number(num1)
        let unNum2 = Number(num2)
        let newNum = unNum1 + unNum2
        this.setState({sum: newNum})
    }

    render(){
        return (
            <div className="puzzleBox sumPB">
                <h4> Sum </h4>
                <input className="inputLine" onChange={(e) => this.handle1Change(e.target.value)}/>
                <input className="inputLine" onChange={(e) => this.handle2Change(e.target.value)}/>
                <button className="confirmationButton" onClick={ () => this.addSums(this.state.number1, this.state.number2)}>Da Button</button>
                <span className="resultsBox"> Total: {this.state.sum}</span>
            </div>
        )
    }
}