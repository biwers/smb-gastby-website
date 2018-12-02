import React, { PureComponent } from 'react'
import Layout from '../components/layout'
import Loader from '../components/common/loader'
import ConstructImage from '../components/ConstructImage'

export default class ConstructionPage extends PureComponent {
  constructor() {
    super()
    this.state = {
      isLoaded: false,
      todo: {},
    }
  }
  async componentDidMount() {
    const getTodo = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const todo = await getTodo.json()
    this.setState({
      todo,
      isLoaded: true,
    })
  }
  render() {
    const { todo, isLoaded } = this.state

    return (
      <Layout>
        {!isLoaded ? (
          <Loader />
        ) : (
          <>
            <h2>{todo.title}</h2>
            <ConstructImage />
          </>
        )}
      </Layout>
    )
  }
}
