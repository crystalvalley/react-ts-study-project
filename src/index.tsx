import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  // APP이라는 컴포넌트를
  <App />,
  // index.html문서의 root라는 id가 붙은 태그에 자식으로 넣어라
  document.getElementById('root') as HTMLElement
);
