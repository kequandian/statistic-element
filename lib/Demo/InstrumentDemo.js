import Instrument from "../components/instrument/Instrument";

const InstrumentDemo = ({}) => {
  const InstrumentProps = {
    name: '百分比',
    value: 22,
    titleType: '岁'
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Instrument, InstrumentProps));
};

export default InstrumentDemo;