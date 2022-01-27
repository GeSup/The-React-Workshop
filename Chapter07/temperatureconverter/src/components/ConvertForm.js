import React from 'react';
import ConvertStatus from './ConvertStatus';
import ConvertInput from './ConvertInput';
import { StatusConsumer } from './StatusContext';

const withStatus = WrappedComponent =>
    () => <StatusConsumer>{props => <WrappedComponent context={props} />}</StatusConsumer>;

const WrapperComponent = withStatus(ConvertStatus);

const ConvertForm = ({ temperature, updateTemperature }) => (
    <div>
        <div>
            <div>
                <ConvertInput temperature={temperature.celsius} updateTemperature={updateTemperature} />
            </div>
            <div>
                <ConvertInput
                    temperature={temperature.fahrenheit}
                    convertTo="celsius"
                    updateTemperature={updateTemperature}
                />
            </div>
        </div>
        <WrapperComponent />
    </div>
);

export default ConvertForm;
