import React, {Component} from 'react';

class Nav extends Component {
    
    render() {
      let lists = [];
      const data = this.props.data;
      if (data.length > 0) {
        data.forEach(d=>{
          lists.push(<li key={d.id}><a href={"/content/"+d.id}>{d.title}</a></li>);
        });
      } 
      return (
        <nav>
          <ul>
            {lists}
          </ul>
        </nav>
      );
    }
}

export default Nav;