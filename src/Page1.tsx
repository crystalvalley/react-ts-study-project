// 2단계 분리된 컴포넌트를 생성
import * as React from 'react'
import { NavLink } from 'react-router-dom';
export default class Page1 extends React.Component {
    public render() {
        return (
            <div>
                Page1
                {/* 클릭하면 to에 적힌 route path로 이동하라 */}
                <NavLink to="/page2">go page2</NavLink>
            </div>
        );
    }
}