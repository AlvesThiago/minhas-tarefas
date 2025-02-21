import BarraLaretal from './containers/BarraLateral'
import ListaDeTarefas from './containers/ListaDeTarefas'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLaretal />
        <ListaDeTarefas />
      </Container>
    </>
  )
}

export default App
