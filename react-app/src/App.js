import React, {Component} from 'react';
import Nav from './components/Nav';
import Article from './components/Article';
import Subject from './components/Subject';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: {title: 'WEB', sub: 'World Wide Web!'},
      contents: [
        {id:1, title:'html', desc: 'HTML is a markup language...'},
        {id:2, title:'css', desc: 'css exist for styling ...'},
        {id:3, title:'js', desc: 'js is a weird language...'}        
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <Subject title="React" sub="hello react"></Subject>
        <Nav data={this.state.contents}></Nav>
        <Article title="HTML" content="HTML is not a computer language, but a markup language "></Article>
      </div>
    )
  }
}

export default App;
