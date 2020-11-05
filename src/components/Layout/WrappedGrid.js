import React, { useImperativeHandle, forwardRef, useContext, useRef } from 'react';
import ContainerContext from '@/utils/ContainerContext';
import './index.css';

/**
 * 需要配合 NamedList 使用
 */
export default forwardRef(function WrappedGrid({ children, col = 3 }, ref) {
  const size = useContext(ContainerContext);
  const initWidth = useRef(size.width / col - 16);

  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return 'l-WrappedGrid';
    }
  }));

  return React.Children.map(children, child => {
    return <div className="l-WrappedGridItem" style={{ width: initWidth.current }}>
      {child}
    </div>
  })
}
)