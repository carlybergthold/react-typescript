import React from 'react';

interface Props {
    beginningCollateral: number;
}

export class Collateral extends React.Component<Props> {
    render () {
        return (
            <div>
                <p>My Collateral: ${this.props.beginningCollateral}</p>
            </div>
        );
    }
}

export default Collateral;