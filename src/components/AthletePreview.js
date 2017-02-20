import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class AthletePreview extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    medals: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {
    return (
      <Link to={`/athlete/${this.props.id}`}>
        <div className="athlete-preview">
          <img src={`img/${this.props.image}`}/>
          <h2 className="name">{this.props.name}</h2>
          <span className="medals-count"><img src="/img/medal.png"/> {this.props.medals.length}</span>
        </div>
      </Link>
    );
  }
}