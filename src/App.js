import React, {Component} from 'react';
import CardMatch from "./components/CardMatch/CardMatch";
import Title from "./components/Title/Title";
import Wrapper from "./components/Wrapper/Wrapper";
import matches from "./simpsonsCards.json";
import './App.css';



let correctMatches = 0;
let topScore = 0;
let alertMsg = "Click on an image to earn points, but don't click on any more than once"


class App extends Component {

state = {
  matches,
  correctMatches,
  topScore,
  alertMsg
};

imageClick = id => {

const matches = this.state.matches;

const clickedMatch = matches.filter(match => match.id === id);


if(clickedMatch[0].clicked) {

  console.log ("Correct Matches: " + correctMatches);
  console.log("Top Score: " + topScore);

  correctMatches = 0;
  alertMsg = "You already clicked on this one!  GAME OVER "

  for (let i=0; i < matches.length; i++) {
    matches[i].clicked = false;
  }

  this.setState({alertMsg});
  this.setState({correctMatches});
  this.setState({matches});

} else if (correctMatches < 11) {

  clickedMatch[0].clicked = true;

  correctMatches++;

  alertMsg = "Good job, you haven't clicked this one yet. Keep Going!";

  if (correctMatches > topScore) {
    topScore = correctMatches;
    this.setState({topScore});
  }

  matches.sort(function(a, b){return 0.5 - Math.random()});

  this.setState({matches});
  this.setState({correctMatches});
  this.setState({alertMsg});
  
  } else {

    clickedMatch[0].clicked = true;

    correctMatches = 0;

    alertMsg = "Well Done! You got all 12 matches!";
    topScore = 12;
    this.setState({topScore});

    for (let i = 0; i < matches.length; i++) {
      matches[i].clicked = false;
    }

    matches.sort(function(a, b) {return 0.5 - Math.random()});

    this.setState({matches});
    this.setState({correctMatches});
    this.setState({alertMsg});

  }
};

render() {
return (
  <Wrapper>
    <Title>Clicky-Game: <span>The Simpsons</span></Title>
    <h2 className="scoreSummary">
      {this.state.alertMsg}
    </h2>

    <h2 className = "scoreSummary">
      Correct Guesses: {this.state.correctMatches}
      <br />
      Top Score: {this.statetopScore}
    </h2>

    {this.state.matches.map(match => (
      <CardMatch
        imageClick={this.imageClick}
        id={match.id}
        key={match.id}
        image={match.image}
      />

    ))}

    </Wrapper>
);

}

}


 

export default App;
