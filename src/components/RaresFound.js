import React from 'react';
import { Component } from 'react';

class RaresFound extends Component{

    constructor(props) {
      super(props);
    }
    render() {
      const allCardsFound = this.props.raresFound;
      const cards = [];
      for (let i = 0; i < allCardsFound.length; i++) {
        const card = allCardsFound[allCardsFound.length - i - 1];
        cards.push(<li class="individualCard" key={i}>{card}</li>);
      }
        return (
          <div>
            <div class="raresFound">
              Rares Cracked:
              {cards}
            </div>
          </div>
        )
    }
}

export default RaresFound;
