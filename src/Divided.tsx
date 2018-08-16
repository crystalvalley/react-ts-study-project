// 2단계 분리된 컴포넌트를 생성
import * as React from 'react'
interface IProps{
    recievedNumber : number;
    // recievedOnClick():void;
    recievedOnClick:()=>void;
    
}
export default class Divided extends React.Component<IProps> {
    constructor(props:IProps){
        super(props);
    }
    public render() {
        return (
            <React.Fragment>
                {/* return은 무조건 최상위 태그 하나로만 나와야한다.*/}
                {/* 3단계 복사 */}
                < div >
                    {/* div안에 number라는 속성이 있음 */}
                    {this.props.recievedNumber}
                </div >
                {/* button안에 onClick이라는 속성이 있음 */}
                <button onClick={this.props.recievedOnClick}>
                    button
                </button>
            </React.Fragment>
        );
    }
}