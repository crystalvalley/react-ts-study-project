import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './Main';

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
        <Switch>
          {/* 
            component property
            Route가 가진 어떠한 props를 component로 전달을 해 줌
            Route가 전달해주는 props중에 location을 써보기로 함
           */}
          <Route path="/test" component={Main} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
