import React from 'react';

const Category = (props) => {
  return (
    <div className={`input-container ${props.title}`}>
      <h2 className="input-container__title">{props.title}</h2>
      {props.children}
    </div>
  )
}

export default Category;