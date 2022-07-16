import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App root', () => {
  it('should render', async () => {
    const user = userEvent.setup()
    render(<App />)
    const helloworld = screen.getByText('hello world')
    expect(helloworld).toBeInTheDocument()
    const button = screen.getByRole('button')
    const counter = screen.getByText('count 0')
    await user.click(button)
    expect(counter).toHaveTextContent('count 1')
  })
})
