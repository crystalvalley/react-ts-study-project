import * as React from 'react';
import { withContext } from './Context';

interface IProps{
    number: number;
    test:string;
    onclick(): void;
}

class A2 extends React.Component<IProps> {
    public render() {
        return (
            <div>
                {this.props.number}
            </div>
        );
    }
}

// withContext함수로 A2를 집어넣음
export default withContext(A2);
