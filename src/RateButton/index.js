import React from 'react';

import './index.css';

import { ReactComponent as Heart } from './heart.svg';

export default class RateButton extends React.Component {
  state = {
    rated: false,
  };

  onClick = () => {
    if (this.state.rated) return;

    fetch('/rate-article')
      .then(resp => resp.json()) /*не совсем понял в чём именно ошибка, но изменил JSON на json и проблема устранилась*/
      .then((data) => {
        if (data.success) {
          this.setState({
            rated: true,
          });
        }
      })
      .catch(() => {});
  };

  render() {
    return (
      <button
        onClick={this.onClick}
        className={`rate-button ${this.state.rated ? 'rated' : ''}`}
      >
        <Heart />
        {this.state.rated ? 'Thanks!' : 'Rate it!'}
      </button>
    );
  }
}
