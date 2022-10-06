import React, { Component } from 'react';
import rares from '../rares.js';
import duals from '../duals.js';
import power from '../power.js';
import RaresFound from './RaresFound.js';
import MoneySpent from './MoneySpent.js';
import DualsOpened from './DualsOpened.js';
import PowerOpened from './PowerOpened.js';
import PacksOpened from './PacksOpened.js';
import DollarsPerDual from './DollarsPerDual.js';
import DollarsPerPower from './DollarsPerPower.js';

class Slots extends Component{

    constructor(props) {
      super(props);
      this.pullTheLever = this.pullTheLever.bind(this);
      this.clearState = this.clearState.bind(this);
      let raresFound = [];
      let moneySpent = 0;
      let packsOpened = 0;
      let dualsOpened = 0;
      let powerOpened = 0;
      let dollarsPerDual = dualsOpened === 0 ? "N/A" : (dualsOpened / moneySpent);
      let dollarsPerPower = powerOpened === 0 ? "N/A" : (powerOpened / moneySpent);
      this.state = {
        raresFound: raresFound,
        moneySpent: moneySpent,
        packsOpened: packsOpened,
        dualsOpened: dualsOpened,
        powerOpened: powerOpened,
        dollarsPerDual: dollarsPerDual,
        dollarsPerPower: dollarsPerPower,
      };
    }

    pullTheLever() {
      // increment money spent
      let oldSpent = this.state.moneySpent;
      const newSpent = oldSpent + 999;
      // increment packs opened
      let oldPackCount = this.state.packsOpened;
      const newPackCount = oldPackCount + 4;

      // add rares for each pack
      const raresFound = this.state.raresFound;
      let oldDualCount = this.state.dualsOpened;
      let oldPowerCount = this.state.powerOpened;
      let newDualsFound = 0;
      let newPowerFound = 0;
      // Bust 4 packs
      for (let i = 0; i < 4; i++) {
        const idx = this.rareIndex();
        console.log("Rare index was ".concat(idx));
        if (idx === 123) {
          alert("hi");
        }
        const rare = rares[idx];
        // was rare a dual?
        if (this.rareWasDual(rare)) {
          newDualsFound++;
        }
        // was rare power?
        if (this.rareWasPower(rare)) {
          newPowerFound++
        }
        raresFound.push(rare);
        // was old bordered card a dual or power?
        const oldCard = this.getOldBorderCard();
        if (oldCard !== null) {
          if (this.rareWasDual(oldCard)) {
            newDualsFound++;
          }
          if (this.rareWasPower(oldCard)) {
            newPowerFound++
          }
          raresFound.push(oldCard.concat(": Old Frame"));
        }
      }

      const newDualCount = oldDualCount + newDualsFound;
      const newPowerCount = oldPowerCount + newPowerFound;

      const newDollarsPerDual = (newDualCount === 0 ? "N/A" : (newSpent / newDualCount).toFixed(2));
      const newDollarsPerPower = (newPowerCount === 0 ? "N/A" : (newSpent / newPowerCount).toFixed(2));
      this.setState({
        raresFound: raresFound,
        moneySpent: newSpent,
        packsOpened: newPackCount,
        dualsOpened: newDualCount,
        powerOpened: newPowerCount,
        dollarsPerDual: newDollarsPerDual,
        dollarsPerPower: newDollarsPerPower
      });
    }

    clearState() {
      this.setState({
        raresFound: [],
        moneySpent: 0,
        packsOpened: 0,
        dualsOpened: 0,
        powerOpened: 0,
        dollarsPerDual: "N/A",
        dollarsPerPower: "N/A"
      });
    }

    isOldBorderedCardRare() {
      const rng = Math.floor((Math.random() * 10) + 1);
      let result = false;
      if (rng < 4) {
        result = true;
      }
      return result;
    }

    getOldBorderCard() {
        if (this.isOldBorderedCardRare()) {
          const idx = this.rareIndex();
          console.log("Old Border index was ".concat(idx));
          return rares[idx];
        }
        return null;
    }

    rareIndex() {
      return Math.floor((Math.random() * 122) + 1);
    }

    rareWasDual(rare) {
      return duals.has(rare);
    }

    rareWasPower(rare) {
      return power.has(rare);
    }

    render() {
      const {
        state: {
          raresFound,
          moneySpent,
          packsOpened,
          dualsOpened,
          powerOpened,
          dollarsPerDual,
          dollarsPerPower
        }
      } = this;
        return (
          <div>
          <div id="appname">
          MTG 30 Simulator
          </div>
            <div id="widgets">
                <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="hosted_button_id" value="JQMDXHFFH9SNL" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
            </div>
            <div id="lever">
              <input id="pullTheLever" type="button" value="Open 4 Packs" onClick={this.pullTheLever}/>
            </div>
            <div id="clear">
              <input id="clearButton" type="button" value="Start Over" onClick={this.clearState}/>
            </div>
            <div class="slots">
              <div class="moneySpent">
                <MoneySpent moneySpent={moneySpent}/>
              </div>
              <div class="packsOpened">
                <PacksOpened packsOpened={packsOpened}/>
              </div>
              <div class="dualsOpened">
                <DualsOpened dualsOpened={dualsOpened}/>
              </div>
              <div class="powerOpened">
                <PowerOpened powerOpened={powerOpened}/>
              </div>
              <div class="dollarsPerDual">
                <DollarsPerDual dollarsPerDual={dollarsPerDual}/>
              </div>
              <div class="dollarsPerPower">
                <DollarsPerPower dollarsPerPower={dollarsPerPower}/>
              </div>
              <div class="raresFound">
                <RaresFound raresFound={raresFound}/>
              </div>
            </div>
          </div>
        )
    }
}

export default Slots;
