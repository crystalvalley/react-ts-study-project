import * as React from 'react';
import A1 from './A1';
import B1 from './B1';
import CounterProvider from './Context';


class App extends React.Component {
  public render() {
    return (
      <CounterProvider>
        {/* 이하는 CoutnerProvider의 children으로 주어짐*/}
        <A1/>
        <B1 />
      </CounterProvider>
    );
  }
}
export default App;
