import * as React from 'react';


// 주어지는 속성의 형태
interface IProps{
    // text라는 이름을 가진 string 속성을 부여받음
    text : string;
}
// human이란 component를 만든다.
// 태어나면 무조건 성별이란 속성을 부여받듯이
// 이러한 컴포넌트들은 props가 반드시 부여되어야 한다.

export default class Divided extends React.Component<IProps> {
    constructor(props:IProps){
        super(props);
    }
    public render() {
        return (
            <div>
                {this.props.text}
            </div>
        );
    }
}