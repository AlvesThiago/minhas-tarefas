import Tarefa from '../../components/FiltroCard/Tarefa'
import * as S from './styles'

const ListaDeTarefas = () => (
  <S.Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      <li>
        <Tarefa />
        <Tarefa />
        <Tarefa />
        <Tarefa />
        <Tarefa />
      </li>
    </ul>
  </S.Container>
)

export default ListaDeTarefas
