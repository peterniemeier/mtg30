import React from 'react';
import { Component } from 'react';

class DualsOpened extends Component{

    constructor(props) {
      super(props);
    }
    render() {
        return (
          <div>
            <div class="dualsOpened">
              Total duals opened: {this.props.dualsOpened}
            </div>
          </div>
        )
    }
}

export default DualsOpened;
