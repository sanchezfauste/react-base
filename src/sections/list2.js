import React, { Component } from 'react'
import users from '../data/users.json'

class UserItem extends Component {
  render() {
    const { user } = this.props

    return (
      <li>
        <p><strong>Username: </strong>{user.username}</p>
        <p><strong>Email: </strong>{user.email}</p>
        <p><strong>Name: </strong>{user.name}</p>
      </li>
    )
  }
}

export default class List2Section extends Component {
  render() {
    return (
      <div>
        <h4>Trabajando con listas v2</h4>
        <ul>
          {users.map((user) => {
            return <UserItem key={user.id} user={user} />
          })}
        </ul>
      </div>
    )
  }
}
