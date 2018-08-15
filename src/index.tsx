import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  // APP이라는 컴포넌트를
  <App />,
  // index.html문서의 root라는 id가 붙은 태그에 자식으로 넣어라
  document.getElementById('root') as HTMLElement
);
// nodejs로 기본적인 서버를 실행
// 3000번 포트로 index.html을 열어주는 역할
// http://localhost:3000/
registerServiceWorker();
