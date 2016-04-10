import React from 'react';

class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
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
          name: 'Lula Fuller',
          email: 'hahn_wilfred@hotmail.com',
          replies: 8724,
          topics: 468,
          solved: 33,
          usergroup: 'Officer',
          registration_date: '06 May 2016',
          last_login: '20 Jul 2016'
        }
      ]
    }
  }

  renderRows() {
    return this.state.users.map((user, index) => {
      return (
        <tr key={index}>
          <td><input type="checkbox"/></td>
          <td>{user.name}</td>
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
      <table>
        <thead>
          <tr>
            <th><input type="checkbox"/></th>
            <th>Username</th>
            <th>Email</th>
            <th>Replies</th>
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
    )
  }
}

export default Table;
