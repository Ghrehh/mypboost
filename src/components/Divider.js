import React from 'react';
import PropTypes from 'prop-types';

import '../style/divider.scss';

class Divider extends React.Component {
  render() {
    return (
      <div className={"divider " + this.props.className}>
        <div className="divider-line" />
        <p className="divider-middle">
          {this.props.children}
        </p>
        <div className="divider-line" />
      </div>
    );
  }
}

Divider.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.string.isRequired
};

export default Divider;
