import React from 'react';

export default function ListItem(props) {
  const { data, onClick, children, ...rest } = props;

  function handleClick() {
    onClick(data);
  }

  return <div onClick={handleClick}>
    {React.cloneElement(children, {
      data: data,
      ...rest,
    })}
  </div>;
}