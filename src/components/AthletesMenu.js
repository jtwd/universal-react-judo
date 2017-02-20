// src/components/AthletesMenu.js
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class AthletesMenu extends Component {
  static propTypes = {
    athletes: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {
    return (
      <nav className="athletes-menu">
        {this.props.athletes.map(menuAthlete => {
          return <Link key={menuAthlete.id} to={`/athlete/${menuAthlete.id}`} activeClassName="active">
            {menuAthlete.name}
          </Link>;
        })}
      </nav>
    );
  }
}