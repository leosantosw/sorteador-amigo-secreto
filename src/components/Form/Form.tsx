import { FormEvent, useRef, useState } from "react"
import { useAddParticipant } from '../../state/hook/useAddParticipant'
import { useMessageError } from '../../state/hook/useMessageError'

export const Form = () => {
  
  const [nameParticipant, setNameParticipant] = useState<string>('')
  const addPartipant = useAddParticipant()
  const inputRef = useRef<HTMLInputElement>(null)

  const errorMessage = useMessageError()

  const handleAddParticipant = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addPartipant(nameParticipant)

    setNameParticipant('')
    inputRef.current?.focus()
  }

  return (
    <form onSubmit={handleAddParticipant}>
      <input
        ref={inputRef} 
        type="text" 
        placeholder="Insira os nomes dos participantes" 
        onChange={(event) => setNameParticipant(event.target.value)}
        value={nameParticipant}
      />
      <button disabled={!nameParticipant}>Adicionar</button>

      {errorMessage && <p role="alert">{errorMessage}</p>}
    </form>
  )
}