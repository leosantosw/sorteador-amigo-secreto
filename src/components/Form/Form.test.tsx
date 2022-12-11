import { render, screen } from "@testing-library/react"
import { Form } from "./Form"

test('when input is empty, submit button is disabled', () => {
  render(<Form />)
  const input = screen.getByPlaceholderText('Insira os nomes dos participantes')

  const button = screen.getByRole('button')

  expect(input).toBeInTheDocument()
  expect(button).toBeDisabled()
})