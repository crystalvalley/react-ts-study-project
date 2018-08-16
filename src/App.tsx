import * as React from 'react';
import Divided from './Divided';

interface IState{
  number : number;
}

class App extends React.Component<{},IState> {
  constructor(props: {}) {
    super(props);
    this.state={
      number : 0
    }
    this.onClick = this.onClick.bind(this);
  }

  public render() {
    return (
      <div>
        {/* 1단계 분리할 부분을 체크 */}
        {/* 4단계 분리시킬 컴포넌트가 가져야할 속성을 파악 */}
        <div>
          {/* div안에 number라는 속성이 있음 */}
          {this.state.number}
        </div>
        {/* button안에 onClick이라는 속성이 있음 */}
        <button onClick={this.onClick}>
          button
        </button>
        <Divided
          recievedNumber={this.state.number}
          recievedOnClick={this.onClick}
        />
      </div>
    );
  }
  private onClick(){
    const num = this.state.number
    this.setState({
      number : num+1
    })
  }
}
export default App;
