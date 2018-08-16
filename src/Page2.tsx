// 2단계 분리된 컴포넌트를 생성
import * as React from 'react'
import { NavLink } from 'react-router-dom';
export default class Page2 extends React.Component {
    public render() {
        return (
            <div>
                Page2
                <NavLink to="/page1">go page1</NavLink>
            </div>
        );
    }
}