import * as React from 'react';
import A2 from './A2';


export default class A1 extends React.Component{
    public render() {
        return (
            <div>
                {/* withContext를 통해서 A2의 props중 number와 onclick은 채워짐 */}
                {/* 하지만 test는 주어지지 않았기 때문에 여기서 주어야함 */}
                <A2
                    test="test"
                />
            </div>
        );
    }

}