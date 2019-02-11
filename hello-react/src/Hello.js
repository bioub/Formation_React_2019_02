import React from 'react';

function Hello({name = ''}) {
  return (
    <div className="Hello">
      Bonjour {name}
    </div>
  );
}

export {
  Hello,
}