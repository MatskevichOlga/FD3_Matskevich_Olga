import React from 'react';
import PropTypes from 'prop-types';
import { mobileEvents } from './events';
import'./MobileForm.css';



class MobileForm extends React.PureComponent {

    static propTypes = {
        client: PropTypes.shape({
                id: PropTypes.number.isRequired,
                fam: PropTypes.string.isRequired,
                im: PropTypes.string.isRequired,
                otch: PropTypes.string.isRequired,
                balance: PropTypes.number.isRequired,
        }),
        isEditMode: PropTypes.bool.isRequired,
    };

    constructor(props) {
        super(props);
        this.famInput = React.createRef();
        this.imInput = React.createRef();
        this.otchInput = React.createRef();
        this.balanceInput = React.createRef();
    }

    save = (e) => {
        const abonent = {
                id: this.props.client.id,
                fam: this.famInput.current ? this.famInput.current.value : this.props.client.fam,
                im: this.imInput.current ? this.imInput.current.value : this.props.client.im,
                otch: this.otchInput.current ? this.otchInput.current.value : this.props.client.otch,
                balance: Number ( this.balanceInput.current ? this.balanceInput.current.value : this.props.client.balance),
        }
mobileEvents.emit('EventSaveClient', abonent);    // выпускаем новое событие в поток событий
    }
    create = () => {
        mobileEvents.emit('EventCreate');  
    }
    cancel = () => {
        mobileEvents.emit('EventCancel');
    }

    render() {

        console.log('MobileForm render')

        if (this.props.isEditMode) {
            return (
                <div className='MobileForm' >
                    <div className="FormRow">
                        <span>Фамилия</span>
                        <input ref={this.famInput} type="text" defaultValue={this.props.client.fam} />
                    </div>
                    <div className="FormRow">
                        <span>Имя</span>
                        <input ref={this.imInput} type="text" defaultValue={this.props.client.im} />
                    </div>
                    <div className="FormRow">
                        <span>Отчество</span>
                        <input ref={this.otchInput} type="text" defaultValue={this.props.client.otch} />
                    </div>
                    <div className="FormRow">
                        <span>Баланс</span>
                        <input ref={this.balanceInput} type="number" defaultValue={this.props.client.balance} />
                    </div>
                    <button className='SaveButton' onClick={this.save}>Сохранить</button>
                    <button className='CancelButton' onClick={this.cancel}>Отмена</button>
                </div>
            )
        } else {
            return (
                <button className='CreateForm' onClick={this.create}> Создать</button>
            )
        }
    }
}

export default MobileForm;