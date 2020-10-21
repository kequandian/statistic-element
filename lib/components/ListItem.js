import React from 'react';
export default function ListItem(props) {
  const {
    data,
    onClick,
    children,
    ...rest
  } = props;

  function handleClick() {
    onClick(data);
  }

  return /*#__PURE__*/React.createElement("div", {
    onClick: handleClick
  }, /*#__PURE__*/React.cloneElement(children, {
    data: data,
    ...rest
  }));
}