import React from 'react';
import { Component } from 'react';

class Statement extends Component{

    constructor(props) {
      super(props);
    }
    render() {
        return (
          <div>
            <div class="statement">
              {this.props.statement}
            </div>
          </div>
        )
    }
}

export default Statement;
