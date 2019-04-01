import React, {Component} from 'react'

export default class FilterObject extends Component{
    constructor(){
        super()

        this.state = {
            unfliteredObjects: [{animal: 'dogs', about: 'cool'}, {animal: 'cats', features: 'kinda cool'}, {animal: 'birds', intelligence: 'smart'}],
            userInput: '',
            filteredArray: []
        }
    }

    assignFilterObj(val){
        console.log('ping button press')
        let obj = this.state.unfliteredObjects
        let newArr = []
        for(let i = 0; i < obj.length; i++){
            if(obj[i].hasOwnProperty(val)){
                newArr.push(obj[i])
                console.log(obj[i])
            }
        }
        console.log(newArr)
        this.setState( {filteredArray: newArr} );
    }

    handleChange(val){
        this.setState({userInput: val})
    }

    render(){
        return (
            <div className="puzzleBox filterObjectPB">
                <h4> FilterObject </h4>
                <span className="puzzleText"> Original: {JSON.stringify(this.state.unfliteredObjects)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.assignFilterObj(this.state.userInput)}>Da Button</button>
                <span className="resultsBox filterObjectRB"> Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}