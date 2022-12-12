import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import { Form } from "./Form"

describe('Form participant', () => {
  test('when input is empty, submit button is disabled', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    )
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')

    const button = screen.getByRole('button')

    expect(input).toBeInTheDocument()
    expect(button).toBeDisabled()
  })

  test('add participant to list if input is not empty', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    )
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    const button = screen.getByRole('button')

    fireEvent.change(input, {
      target: {
        value: 'John Doe'
      }
    })

    fireEvent.click(button)
    expect(input).toHaveFocus()
    expect(input).toHaveValue('')
  })

  test('should not add participant duplicated to list', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    )
    
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    const button = screen.getByRole('button')

    fireEvent.change(input, {
      target: {
        value: 'John Doe'
      }
    })

    fireEvent.click(button)
    
    fireEvent.change(input, {
      target: {
        value: 'John Doe'
      }
    })

    fireEvent.click(button)

    const messageError = screen.getByRole('alert')
    expect(messageError.textContent).toBe('Nomes duplicados não são permitidos!')
  })
})