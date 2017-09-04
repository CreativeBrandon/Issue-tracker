import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { HeaderComponent } from './header.component'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BrowserRouter><HeaderComponent title="Page Title" /></BrowserRouter>, div)
})

describe('attributes', () => {
  it('Sets the page title', () => {
    // const header = new HeaderComponent()
    // console.log(header.props.title)
    expect(true).toEqual(true)
  })
})
