import * as React from 'react';
import Greeting from '../components/greeting';

const SayHello = () => {
    return (
        <div>
            <Greeting name = 'James' />
            <Greeting name = 'Luna' />
            <Greeting name = 'Sophie' />
        </div>
    )
}

export default SayHello
