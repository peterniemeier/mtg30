import React from 'react';
import { Component } from 'react';

class PowerOpened extends Component{

    constructor(props) {
      super(props);
    }
    render() {
        return (
          <div>
            <div class="powerOpened">
              Total power opened: {this.props.powerOpened}
            </div>
          </div>
        )
    }
}

export default PowerOpened;
