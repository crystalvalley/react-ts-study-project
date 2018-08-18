import * as React from 'react';
import { CounterContext } from './Context';

export default class B2 extends React.Component {
    public render() {
        return (
            <div>
                <CounterContext.Consumer>
                    {
                        value => {
                            return (
                                <button onClick={value.onclick}>
                                    test
                                </button>
                            );
                        }
                    }
                </CounterContext.Consumer>
            </div>
        );
    }
}