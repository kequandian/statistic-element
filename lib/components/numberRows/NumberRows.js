function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
    * @author Yang,YN  2018-9-11
    * @editor
    * @updated
    * @desc  简单实现了子组件占据本组件的高度，组件默认高度为400，子组件传入的数量决定了每个子组件的高度
    * @eg
    <NumberRows>
      children
    </NumberRows>
 */
import React from 'react';

class NumberRows extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "showStyle", value => {
      return {
        marginBottom: '1em',
        ...this.props.style,
        height: this.state.height / value
      };
    });

    _defineProperty(this, "createList", children => children.length >= 0 && children && children.map((item, index) => {
      return /*#__PURE__*/React.createElement("div", {
        key: index,
        style: {
          height: `${this.state.height / children.length}px`,
          marginBottom: '1em',
          ...this.props.style
        }
      }, item);
    }));

    this.state = {
      height: props.style && props.style.height ? props.style.height : 400
    };
  }

  render() {
    const {
      children
    } = this.props;
    const style = {
      height: 400,
      ...this.props.style
    };
    return /*#__PURE__*/React.createElement("div", {
      style: style
    }, this.createList(children), children != undefined && Array.isArray(children) == false ? /*#__PURE__*/React.createElement("div", {
      style: style
    }, children) : null);
  }

}

export default NumberRows;