import React from 'react';

export default function Gateway({ children, converter, ...rest }) {
  const data = {
    ...rest,
  };

  Object.keys(converter).forEach(key => {
    delete data[key];
    data[converter[key]] = rest[key];
  })

  return React.cloneElement(children, {
    ...data,
  })
}