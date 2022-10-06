import React from 'react';
import { Component } from 'react';

class DollarsPerDual extends Component{

    constructor(props) {
      super(props);
    }
    render() {
        return (
          <div>
            <div class="dollarsPerDual">
              Dollars spent per dual: ${this.props.dollarsPerDual}
            </div>
          </div>
        )
    }
}

export default DollarsPerDual;
