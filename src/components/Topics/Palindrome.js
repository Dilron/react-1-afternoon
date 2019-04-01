import React, {Component} from 'react'

export default class Palindrome extends Component{
    constructor(){
        super()
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleChange(val){
        this.setState({userInput: val})
    }

    checkPalindrome(val){
        console.log('button ping')
        let str = [...val]
        let compStr = []
        let ans = ''
        // console.log(str)
        for(let i = 0; i < str.length; i++){
            compStr.unshift(str[i])
            console.log(compStr)
        }

        let nStr = str.join('')
        let nCompStr = compStr.join('')

        console.log(nStr, nCompStr)
        if (nStr === nCompStr) {
            ans = 'true'
            console.log(ans, 'ping true side')
        } else {
            ans = 'false'
            console.log(ans ,'ping false side')
        }
        console.log('ping after')
        this.setState({palindrome: ans})
    }

    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4> Palindrome </h4>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={ () => this.checkPalindrome(this.state.userInput)}>Da Button</button>
                <span className="resultsBox"> Palindrome Status: {this.state.palindrome}</span>
            </div>
        )
    }
}