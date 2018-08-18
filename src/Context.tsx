import * as React from 'react';

// context가 저장할 값

interface IStore {
    number: number;
    onclick(): void;
}

// IStore를 저장하는 Context를 생성함
export const CounterContext = React.createContext<IStore>({
    number: 0,
    onclick: () => { return }
})

/*
    Provider는 Context가 저장하고 있는 값을 사용할 수 있게 하는 역할
    Consumer는 Context가 저장하고 있는 값을 실제 사용하게 하는 역할
*/

// 보통 Provider를 이렇게 사용함
export default class CounterProvider extends React.Component<{}, IStore>{
    constructor(props: {}) {
        super(props);
        this.onclick = this.onclick.bind(this);
        this.state = {
            number: 1,
            onclick: this.onclick
        }
    }
    public render() {
        return (
            <CounterContext.Provider value={this.state}>
                {this.props.children}
            </CounterContext.Provider>
        );
    }
    private onclick() {
        const next = this.state.number + 1;
        this.setState({
            number: next
        })
    }
}
// A2가 들어온다 가정,
// props는 number onclick test 3개가 있음
// P는 A2의 props가 됨 그리고 P는 IStore값을 보유하고 있음 (number,onclick)
// 그래서 A2는 이 함수의 파라미터로 입력이 가능함
export function withContext<P extends IStore>(Component: React.ComponentType<P>) {
    // Pick 부분
    // Exclude로 IStore (number,onclick) 부분과 P (test) 부분으로 나눔
    // Pick으로 P부분은 무시
    return function useContext(props: Pick<P, Exclude<keyof P, keyof IStore>>) {
        return (
            // 나머지로 number와 onclick만 대입시키고 출력
            <CounterContext.Consumer>
                {
                    value=>{    
                        return(
                            <Component 
                                number={value.number}
                                onclick={value.onclick}
                            />
                        );
                    }
                }
            </CounterContext.Consumer>
        );
    }
}