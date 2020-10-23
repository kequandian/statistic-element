import React from 'react';
import ReactDOM from 'react-dom';

import APIContainer from '@/APIContainer';
import AutoChart from '@/APIContainer/AutoChart';

ReactDOM.render(
  <APIContainer
    API={'http://test.com/api/test'}
    queryData={{
      extraData: 'test',
    }}
  >
    <AutoChart />
  </APIContainer>
  , document.getElementById("root")
);