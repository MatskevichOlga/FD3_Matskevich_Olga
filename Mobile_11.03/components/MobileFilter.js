import React from 'react';
import { mobileEvents } from './events';


class MobileFilter extends React.PureComponent {

    render() {
 
        return (
            <div className='Filter'>
                <button className='ButtonAll' onClick={() => mobileEvents.emit('EventAll')}>Все</button>
                <button className='ButtonActive' onClick={() => mobileEvents.emit('EventActive')}>Активные</button>
                <button className='ButtonBlocked' onClick={() => mobileEvents.emit('EventBlocked')}>Заблокированные</button>
            </div>
        )
    }
}

export default MobileFilter;