import React from 'react';

const styles = {
  display: 'flex',
  justifyContent: 'center',
  margin: '0.5rem',
};

export default () => (
  <div style={styles}>
    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
  </div>
);
