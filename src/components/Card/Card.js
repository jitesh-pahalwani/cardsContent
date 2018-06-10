import React, { Component } from 'react';
import './Card.css';
import Button from '../Button/Button';

class Card extends Component {

  render() {
    const imgStyle = {
      backgroundImage: "url("+this.props.item.image+")",
      backgroundSize: "100% 100%"
    }
    return (
      <div className='cardContainer' style={imgStyle}>
        <div className='upperDiv'>
          <Button text='Open' />
          <Button text='Delete' onButtonPress={() => this.props.onDeletePress(this.props.itemKey)}/>
          <Button text='Print'/>
        </div>
        <div className='lowerDiv'>
          <div className='titleDiv'>
          {this.props.item.title}
          </div>
          <div className='descriptionDiv'>
          {this.props.item.description}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
