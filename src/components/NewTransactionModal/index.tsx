import * as Dialog from "@radix-ui/react-dialog"
import { CloseButton, Content, Overlay, TransactionTypes, TransactionTypesButton } from "./styles"
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react"

export function NewTransactionModal(){
  return(
    <Dialog.Portal>
      <Overlay/>

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <CloseButton>
          <X size={24}/>
        </CloseButton>

        <form>
          <input type="text" placeholder="Descrição"  required/>
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required/>

          <TransactionTypes>
            <TransactionTypesButton variant="income" value="income">
              <ArrowCircleUp size={24} />
                Entrada
            </TransactionTypesButton>
            <TransactionTypesButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24} />
                Saída
            </TransactionTypesButton>
          </TransactionTypes>

          <button type="submit">
              Cadastrar
          </button>
        </form>
      </Content>
     </Dialog.Portal>
  )
}
