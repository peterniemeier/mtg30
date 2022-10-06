import React from 'react';
import { Component } from 'react';

class MoneySpent extends Component{

    constructor(props) {
      super(props);
    }
    render() {
        return (
          <div>
            <div class="moneySpent">
              Money spent on product: ${this.props.moneySpent}
            </div>
          </div>
        )
    }
}

export default MoneySpent;
