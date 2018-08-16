import * as React from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';

interface IState {
  number: number;
}

class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <BrowserRouter>
        {/* BrowserRouter는 기본적인 Router입니다. */}
        {/* Switch는 자식 Route 중 단 하나만 체크 */}
        <Switch>
          {/* 
            경로 비교 방식 
            ~~~~/test
            /도 적용되고
            /test도 적용되요.
          */}
          {/* http://naver.com/news/abc?a=b&c=d */}
          {/* context path => http://naver.com */}
          {/* route path => /news/abc */}
          {/* url query ?a=b&c=d (parameter) */}
          {/* 주소의 route path를 비교하여 특정 컴포넌트를 보여줌 */}
          <Route path="/page1" component={Page1}/>
          <Route path="/page2" component={Page2}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
