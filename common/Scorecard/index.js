import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class Scorecard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {cards} = this.props;
    return (
      <div className="score-card">
        {cards.map((card, i) => (
          <div className="card" key={i}>
            <div className="key">{card.key}</div>
            <div className="value">{card.value}</div>
          </div>
        ))}
      </div>
    );
  }
}

Scorecard.propTypes = {
  cards: PropTypes.array
};

export default Scorecard;
