import { HeaderContainer, HeaderContext, NewTransactionButton } from "./styles";

export function Header(){
  return(
    <HeaderContainer>
      <HeaderContext>
        <span>Logo</span>
        <NewTransactionButton>
          Nova Transação
        </NewTransactionButton>
      </HeaderContext>
    </HeaderContainer>
  )
}