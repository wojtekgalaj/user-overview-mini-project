import React from 'react';

class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          selected: false,
          name: 'Lucy Bennet',
          email: 'helmer.waters@gmail.com',
          replies: 9815,
          topics: 468,
          solved: 33,
          usergroup: 'Colonel',
          registration_date: '01 Mar 2016',
          last_login: '01 Mar 2016'
        },
        {
          selected: false,
          name: 'Lula Fuller',
          email: 'hahn_wilfred@hotmail.com',
          replies: 8724,
          topics: 468,
          solved: 33,
          usergroup: 'Officer',
          registration_date: '06 May 2016',
          last_login: '20 Jul 2016'
        },
        {
          selected: false,
          name: 'Sally Williams',
          email: 'tressie.prosacco@hotmail.com',
          replies: 7654,
          topics: 345,
          solved: 28,
          usergroup: 'General',
          registration_date: '06 May 2016',
          last_login: '20 Jul 2016'
        }
      ]
    }
  }

  selectRow(index, ev) {
    this.state.users[index].selected = ev.target.checked;
    const users = this.state.users;
    users[index].selected = ev.target.checked;
    this.setState({users})
  }

  renderRows() {
    return this.state.users.map((user, index) => {
      const avatarURI = `app/assets/avatars/${user.name.toLowerCase().replace(/ /g, '_')}.png`;
      return (
        <tr key={index} className={user.selected ? 'selected' : ''}>
          <td><input type="checkbox"
                     onChange={this.selectRow.bind(this, index)}/>
          </td>
          <td className="name">
            <img src={avatarURI} alt=""/>
            <span>{user.name}</span>
            <i className="fa fa-clone"/>
          </td>
          <td>{user.email}</td>
          <td>{user.replies}</td>
          <td>{user.topics}</td>
          <td>{user.solved}</td>
          <td>{user.usergroup}</td>
          <td>{user.registartion_date}</td>
          <td>{user.last_login}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div className="tableWrapper">
        <table className="table users">
          <thead>
            <tr>
              <th><input type="checkbox"/></th>
              <th>Username</th>
              <th>Email</th>
              <th>Replies <img src="app/assets/triangle.png"/></th>
              <th>Topics</th>
              <th>Solved</th>
              <th>Usergroup</th>
              <th>Registration date</th>
              <th>Last login</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table;
