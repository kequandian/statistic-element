import React from 'react';
import ReactDOM from 'react-dom';

import APIContainer from '@/APIContainer';
import Statistic from '@/Statistic';

ReactDOM.render(
  <APIContainer
    API={'http://test.com/api/test'}
    queryData={{
      extraData: 'test',
    }}
  >
    <Statistic />
  </APIContainer>
  , document.getElementById("root")
);