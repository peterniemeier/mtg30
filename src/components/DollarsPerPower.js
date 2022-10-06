import React from 'react';
import { Component } from 'react';

class DollarsPerPower extends Component{

    constructor(props) {
      super(props);
    }
    render() {
        return (
          <div>
            <div class="dollarsPerPower">
              Dollars spent per power: ${this.props.dollarsPerPower}
            </div>
          </div>
        )
    }
}

export default DollarsPerPower;
