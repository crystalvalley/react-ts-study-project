
import { Location } from 'history';
import * as React from 'react';

// 프로퍼티의 모양? 형식?을 정해줌
interface IProps {
    location: Location
}

export default class Main extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }
    public render() {
        // Route에서 받은 location 정보 중, search 부분을 받겠다.
        // 이 부분은 url query를 의미한다.
        // ?a=b&c=d 같은 부분
        const params = new URLSearchParams(this.props.location.search);
        return (
            <div>
                {/* 
                    spring에서 사용한 
                    request.getAttribute("boardType")
                */}
                {params.get("boardType")}<br />
                {params.get("page")}<br />
            </div>
        );
    }
}