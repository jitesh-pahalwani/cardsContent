import React, { Component } from 'react';
import './Home.css';
import Card from '../Card/Card';
import Items from '../../stubs/items.json';

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      allItems:Items.items
    };
    this.onDeletePress = this.onDeletePress.bind(this);
  }

  onDeletePress(_index){
    this.setState((prevState) => {
      prevState.allItems.splice(_index,1);
      return {allItems: this.state.allItems};
    });
  }

  renderCards(_items){
    return (_items.map((item,index) => {
        return (<Card onDeletePress={(index) => {this.onDeletePress(index)}} key={index} itemKey={index} item={item} />);
      })
    )
  }

  render() {
    return (
      <div className='container'>
        {this.renderCards(this.state.allItems)}
      </div>
    );
  }
}

export default Home;
