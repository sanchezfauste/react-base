import React, { Component } from 'react'

export default class ListSection extends Component {
  render() {
    const numbers = [1, 1, 3, 4, 5]

    return (
      <div>
        <h4>Trabajando con listas</h4>
        {numbers.map((number, index) => {
          return <p key={index}>Numero: {number}</p>
        })}
      </div>
    )
  }
}
