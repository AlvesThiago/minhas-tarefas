import { Provider } from 'react-redux'
import BarraLaretal from './containers/BarraLateral'
import ListaDeTarefas from './containers/ListaDeTarefas'
import EstiloGlobal, { Container } from './styles'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLaretal />
        <ListaDeTarefas />
      </Container>
    </Provider>
  )
}

export default App
