import { NewTransactionModal } from '../NewTransactionModal'
import { HeaderContainer, HeaderContext, NewTransactionButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContext>
        <span></span>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContext>
    </HeaderContainer>
  )
}
