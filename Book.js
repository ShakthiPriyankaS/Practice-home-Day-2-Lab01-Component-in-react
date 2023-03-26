import React, { Component } from 'react'

export class Book extends Component {
  render() {
    return (
      <div>
        <h5>
            {this.props.name} written by {this.props.author}
        </h5>
      </div>
    )
  }
}

export default Book