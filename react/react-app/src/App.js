import React, {Component} from 'react';
import Nav from './components/Nav';
import Article from './components/Article';
import Subject from './components/Subject';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'read',
      welcome: {title:'welcome', desc: 'Hello, React!!'},
      subject: {title: 'WEB', sub: 'World Wide Web!'},
      contents: [
        {id:1, title:'html', desc: 'HTML is a markup language...'},
        {id:2, title:'css', desc: 'css exist for styling ...'},
        {id:3, title:'js', desc: 'js is a weird language...'}        
      ],
    };
  }
  render() {
    var _title = this.state.contents[0].title;
    var _desc = this.state.contents[0].desc;
    var mode = this.state.mode;
    if (mode && this.state[mode]) {
      _title = this.state[mode].title;
      _desc = this.state[mode].desc;
    }

    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <Subject title="React" sub="hello react"></Subject>
        <Nav data={this.state.contents}></Nav>
        <Article title={_title} content={_desc}></Article>
      </div>
    )
  }
}

export default App;
