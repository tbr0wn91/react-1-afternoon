import React, { Component } from 'react';

export default class FilterObject extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            baseballPlayers: [
                {
                    name: 'Ketel Marte',
                    team: 'Arizona Diamondbacks',
                    age: 25,
                },
                {
                    name: 'Matt Chapman',
                    team: 'Oakland Athletics',
                    Country: "USA",
                },
                {
                    name: 'Mike Trout',
                    team: 'LA Angels',
                    position: "outfielder",
                }
            ],

            userInput: '',
            filteredPlayer: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val} );
    }

    filterPlayers(prop) {
        let baseballPlayers = this.state.baseballPlayers;
        let filteredPlayers = [];

        for (let i = 0; i < baseballPlayers.length; i++) { console.log("--->",baseballPlayers[i].hasOwnProperty(prop), prop)
            if(baseballPlayers[i].hasOwnProperty(prop) ) {
                console.log("has property", baseballPlayers[i])
                filteredPlayers.push(baseballPlayers[i]);
            }
        }

        this.setState({ filteredPlayer: filteredPlayers });
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: { JSON.stringify(this.state.baseballPlayers, null, 10) }</span>
                <input className="inputLine" onChange={ (event) => this.handleChange(event.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filterPlayers(this.state.userInput) }>Filter</button>
                <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredPlayer, null, 10) }</span>

            </div>
        )
    }
}