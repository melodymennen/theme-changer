import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: 'true'
    };

    this.updateColor = this.updateColor.bind(this);
    this.updateEditStatus = this.updateEditStatus.bind(this);
  }

  updateColor(value){
    this.setState({fontColor: value})
  };

  // updateSize

  // updateFamily

  updateEditStatus(value){
    this.setState({allowEdit: value})
  };

  render() {
    return (
      <div>
        <div className="headerBar">
          <EditToggle update={this.updateEditStatus}/>
          <ColorChanger update={this.updateColor} />
          { /* Render SizeChanger */ }
          { /* Render FamilyChanger */ }
        </div>
        <div className="textArea">
          <TextContainer fontColor={this.state.fontColor}/>
        </div>
      </div>
    )
  }
}

export default App;
