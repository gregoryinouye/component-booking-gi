import React from 'react';
import styled from 'styled-components';
import CloseButton from './CloseButton.jsx';
import Price from './Price.jsx';
import Reviews from './Reviews.jsx';
import Dates from './Dates.jsx';
import Guests from './Guests.jsx';
import Book from './Book.jsx';
import Info from './Info.jsx';
import Report from './Report.jsx';

const StyledBooking = styled.div`
  padding: 24px;
  width: 328px;
  height: 462px;
  margin: 0px;
  font-family: 'Quicksand', sans-serif;
`;

// StyledBooking.displayName = 'StyledBooking';

const StyledBreak = styled.div`
  width: 328px;
  height: 0px;
  border: 1px;
  border-bottom-style: solid;
  border-bottom-color: #EBEBEB;
  margin-top: 24px;
  margin-bottom: 24px;
`;

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numReviews: 102,
      numViews: 0,
      rating: 4.3,
      isDatesOpen: false,
      isGuestsOpen: false,
      numAdults: 0,
      numChildren: 0,
      numInfants: 0,
    };
  }

  toggleGuestsDropdown() {
    this.setState({ isGuestsOpen: !this.state.isGuestsOpen });
  }

  updateNumAdults(value) {
    this.setState(prev => {
      return {
        numAdults: prev.numAdults += value
      };
    });
  }

  updateNumChildren(value) {
    this.setState(prev => {
      return {
        numChildren: prev.numChildren += value
      };
    });
  }

  updateNumInfants(value) {
    this.setState(prev => {
      return {
        numInfants: prev.numInfants += value
      };
    });
  }

  render() {
    return <StyledBooking>
      <CloseButton />
      <Price />
      <Reviews numReviews={this.state.numReviews} rating={this.state.rating} />
      <StyledBreak />
      <Dates />
      <Guests isOpen={this.state.isGuestsOpen} toggle={this.toggleGuestsDropdown.bind(this)} numAdults={this.state.numAdults} numChildren={this.state.numChildren} numInfants={this.state.numInfants} updateNumAdults={this.updateNumAdults.bind(this)} updateNumChildren={this.updateNumChildren.bind(this)} updateNumInfants={this.updateNumInfants.bind(this)}/>
      <Book />
      <StyledBreak />
      <Info numViews={this.state.numViews}/>
      <Report />      
    </StyledBooking>;
  }
}

export default Booking;
