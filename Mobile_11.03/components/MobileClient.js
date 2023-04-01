import React from 'react';
import PropTypes from 'prop-types';
import { mobileEvents } from './events';
import './MobileClient.css';


class MobileClient extends React.PureComponent {

  static propTypes = {
    client: PropTypes.shape({
        id: PropTypes.number.isRequired,
        fam: PropTypes.string.isRequired,
        im: PropTypes.string.isRequired,
        otch: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
    })
  };

  state = {...this.props.client};
// не мутируем, делаем копию 
  componentDidUpdate = (prevProps) => {
    let newProps = this.props.client.id !== prevProps.client.id || this.props.client.balance !== prevProps.client.balance ||
      this.props.client.fam !== prevProps.client.fam || this.props.client.im !== prevProps.client.im ||this.props.client.otch !== prevProps.client.otch;   
    
      // Если пропсы не изменились, новый запрос может и не требоваться.

    if (newProps) {
      this.setState({...this.props.client, FIO: {...this.props.client.FIO},});
    }
  };


  delete = (e) => {
    mobileEvents.emit('EventDelete', this.state.id);
  }

  edit = () => {
    mobileEvents.emit('EventEdit', this.state);
  }

  render() {

    const isActive = this.state.balance > 0;

    return (
      <tr>
        <td>{this.state.fam}</td>
        <td>{this.state.im}</td>
        <td>{this.state.otch}</td>
        <td>{this.state.balance}</td>
        <td style={{ backgroundColor: isActive ? ' rgb(12, 184, 12)' : 'red' }} >
          {isActive ? 'Active' : 'Blocked'}
        </td>
        <td><button className='MobileClientEdit' onClick={this.edit} >Редактировать</button></td>
        <td><button className='MobileClientDelete' onClick={this.delete}>Удалить</button></td>
      </tr>
    )
  }
}

export default MobileClient;


/*class MobileClient extends React.PureComponent {

  static propTypes = {
    info:PropTypes.shape({
      id: PropTypes.number.isRequired,
      fio: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    }),
  };

  state = {
    info: this.props.info,
  };

  componentDidUpdate = (oldProps, oldState) => {
    console.log("MobileClient id="+this.props.info.id+" componentDidUpdate");
    if ( this.props.info.balance!==this.state.info.balance )
      this.setState({info:this.props.info});
  };

  render() {

    console.log("MobileClient id="+this.state.info.id+" render");
    
    return (
      <div className='MobileClient'>
        <span className='MobileClientBalance'>{this.state.info.balance}</span>
        <span className='MobileClientFIO'>{this.state.info.fio}</span>
      </div>
    );

  }

}

export default MobileClient;*/
