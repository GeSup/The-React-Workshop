import React from 'react';

const ConvertStatus = ({ context }) => {
    const getStatus = value => {
        switch (true) {
            case value > 50:
                return 'Very hot';
            case value > 30:
                return 'Hot';
            case value > 15:
                return 'Warm';
            case value > 0:
                return 'Cool';
            case value > -10:
                return 'Cold';
            case value <= -10:
                return 'Very cold';
            default:
                return null;
        }
    };

    return <div className="status">Status: {getStatus(context)}</div>;
};

export default ConvertStatus;