import React from 'react';
import PropTypes from 'prop-types';
import { mobileEvents } from './events';
import MobileClient from './MobileClient';
import MobileForm from './MobileForm';
import MobileFilter from './MobileFilter';
import'./MobileCompany.css';

let defaultClient = {
  id: 0,
  fam: '',
  im: '',
  otch: '',
  balance: 0,
}
class MobileCompany extends React.PureComponent {

  static propTypes = {
    clients: PropTypes.arrayOf(
      PropTypes.shape({
          id: PropTypes.number.isRequired,
          fam: PropTypes.string.isRequired,
          im: PropTypes.string.isRequired,
          otch: PropTypes.string.isRequired,
          balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    clients: this.props.clients,
    status: 0,
    editClient: defaultClient,
    isEditMode: false,
  };

  addId = () => {            //находим максимальное и добавляем 1
    let clients = this.state.clients;
   let maxId = clients.reduce((prev, curr) => {
      if (prev.id > curr.id) {
        return prev.id
      }
      return curr.id
    })

    return maxId + 1;
  }

  ///подписываемся на события из этого потока

  componentDidMount = () => {                         //подписывать компонент на внешние события
    mobileEvents.addListener('EventDelete', this.delete); 
    mobileEvents.addListener('EventEdit', this.edit);
    mobileEvents.addListener('EventCreate', this.create);
    mobileEvents.addListener('EventSaveClient', this.save);
    mobileEvents.addListener('EventCancel', this.cancel);
    mobileEvents.addListener('EventAll', this.filterAll);
    mobileEvents.addListener('EventActive', this.filterActive);
    mobileEvents.addListener('EventBlocked', this.filterBlocked);

  };

  componentWillUnmount = () => {                           //отписывать компонент от внешних событий
    mobileEvents.removeListener('EventDelete', this.delete);
    mobileEvents.removeListener('EventEdit', this.edit);
    mobileEvents.removeListener('EventCreate', this.create);
    mobileEvents.removeListener('EventSaveClient', this.save);
    mobileEvents.removeListener('EventCancel', this.cancel);
    mobileEvents.removeListener('EventAll', this.filterAll);
    mobileEvents.removeListener('EventActive', this.filterActive);
    mobileEvents.removeListener('EventBlocked', this.filterBlocked);
  };


  create = () => {
    this.setState({editClient: defaultClient, isEditMode: true, })
  }

  cancel = () => {
    this.setState({ isEditMode: false,})
  }

  edit = (client) => {
    this.setState({editClient: client, isEditMode: true,})
  }

  delete = (id) => {
    let newclient = this.state.clients.filter((client) => {
      return client.id !== id;
    })
    this.setState({ clients: newclient })
  }


  save = (client) => {
    this.setState({ isEditMode: false })
    let oldClient = this.state.clients.some((v) => v.id === client.id);

    if (!oldClient) {
      this.setState(prev => ({ clients: [...prev.clients, { ...client, id: this.addId() }] }))

    } else {
      let newClientsArr = this.state.clients.map((s) => s.id === client.id ? client : s)
      this.setState({ clients: [...newClientsArr] })
    }
  }

  filterAll = () => this.setState({ status: 0 })
  filterActive = () => this.setState({ status: 1 })
  filterBlocked = () => this.setState({ status: 2 })

  render() {
    const filterClient = this.state.clients.filter((client) => {
      switch (this.state.status) {
        case 1: return client.balance > 0;
        case 2: return client.balance < 0;
        default: return true;
      }
    })

    const clientsCode = filterClient.map(client => {
      return <MobileClient key={client.id} client={client} />;
    });

    return (
      <div className='MobileCompany' >
        <MobileFilter />
        <table className='MobileClient'>
          <thead>
            <tr>
              <td>Фамилия</td>
              <td>Имя</td>
              <td>Отчество</td>
              <td>Баланс</td>
              <td>Статус</td>
              <td>Редактировать</td>
              <td>Удалить</td>
            </tr>
          </thead>
          <tbody>{clientsCode}</tbody>
        </table>
        <MobileForm client={this.state.editClient} isEditMode={this.state.isEditMode}
        />
      </div >
    );

  }

}

export default MobileCompany;
