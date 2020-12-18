import React from 'react';
//import './names.css'

class App extends React.Component {
    state = {fName: '', lName: ''};

    provideName = () => {
      fetch('test.walmart.com/person', { method : 'post', params: {fname: this.state.fName, lname: this.state.lName}})
      .then(function(fname,lname) {
        console.log(fname, lname);
      });
    }

    changeName = () => {
      this.setState({lName: 'foo', fName: 'bar'});
    }

    emptyNames = () => {
      this.setState({lName: '', fName: ''});
    }
    
    render() {
        return <div className="ui container" style={{marginTop: '10px'}}>
        <label>FirstName</label>
        <input type='text' value={this.state.fName} onChange={(e) => this.setState({fName: e.target.value})}/>
        <label>LastName</label>
        <input type='text' value={this.state.lName} onChange={(e) => this.setState({lName: e.target.value})}/>
        <button onClick={this.provideName} >Submit</button>
        <button onClick={this.changeName}> Change Name</button>
        <button onClick={this.emptyNames}> Empty Names</button>
    </div>
    }
}

export default App;
