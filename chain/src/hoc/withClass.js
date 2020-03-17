import React from 'react';

const withClass = (Component, className) => {
  return props => {
    return (
      <div className={ className }>
        
        <Component/>
      </div>
    )
  }
}

export default withClass;