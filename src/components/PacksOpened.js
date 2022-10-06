import React from 'react';
import { Component } from 'react';

class PacksOpened extends Component{

    constructor(props) {
      super(props);
    }
    render() {
        return (
          <div>
            <div class="packsOpened">
              Total packs opened: {this.props.packsOpened}
            </div>
          </div>
        )
    }
}

export default PacksOpened;
