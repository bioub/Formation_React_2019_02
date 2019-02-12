import React from 'react';
import PropTypes from 'prop-types';

function Hello({name = ''}) {
  return (
    <div className="Hello">
      Bonjour {name}
    </div>
  );
}

Hello.propTypes = {
  name: PropTypes.string,
};

export {
  Hello,
}