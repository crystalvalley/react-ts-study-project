// ajax 통신을 위한 module
import axios from 'axios';
import * as React from 'react';
import Divided from './Divided';

// prop은 설정값 - 자신이 변경할 수 없는, 주어진 값
// 사람이 성별이 남자다. => 불변함
// state는 상태값
// 사람이 배가 고프다. 밥을 먹으면 해소가 가능함 => 변할 수 있음

// 상태의 모양
interface IState {
  // text라는 이름의 string 상태를 보유함
  text: string;
  updated: string;
}

// generic 규칙은 props,state 순서
class App extends React.Component<{}, IState> {
  // 생성자, props를 받아 생성함
  constructor(props: {}) {
    super(props);
    // state를 직접적으로 '=' 통해서 대입시키는 건
    // constructor에서만
    this.state = {
      text: "초기 상태",
      updated: "안 됨"
    }
    this.onClick = this.onClick.bind(this);
  }

  // component가 update된 직후에 실행하는 메소드
  // component내부의 속성이나 상태가 변경되는 것을 update라고 해요
  public componentDidUpdate() {
    if (this.state.updated === "됨") { return; }
    // 밑의 메소드가 실행되면 무조건 update됨
    this.setState({
      updated: "됨"
    })
    // axios.메소드(주소,값들)
    axios.get("https://www.naver.com", {
      // parameter들
      // spring에서 controller메소드들이 받는 parameter
      params: {
        title: "test"
      }
    })
      // $.ajax에서 success
      // 통신의 결과로 어떠한 함수를 실행함
      // block is empty에러가 뜰테니 주석만 처리
      // .then((response) => {})
  }

  public render() {
    // JSX문법상 HTML부분은 주석을 이하와 같이 처리함
    return (
      <div>
        {/* 이렇게 */}
        {/* 일단은 component로 알고 ㄱㄱ */}
        {/* 밑의 div Component의 내부에 state.text가 들어가있음 */}
        <div>
          {this.state.text}
        </div>
        {/* 바로 위의 div와 동일한 Component를 가져옴 */}
        {/* this.state.text라는 값을 밑의 Divided에 넣어줘야 함 */}
        <Divided
          text={this.state.text}
        />
        <div>
          {this.state.updated}
        </div>
        <button
          onClick={this.onClick}
        >
          이것은 버튼
        </button>
      </div>
    );
  }
  private onClick() {
    // state를 변경하겠다.
    // immutable
    this.setState({
      text: "변경됨"
    })
  }
}

export default App;
