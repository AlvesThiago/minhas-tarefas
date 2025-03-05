import Tarefa from '../../components/FiltroCard/Tarefa'
import * as S from './styles'

const tarefas = [
  {
    tituilo: 'Estudar JavaScript',
    descricao: 'Ver a aula 3 da EBAC',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    tituilo: 'Estudar JavaScript',
    descricao: 'Ver a aula 3 da EBAC',
    prioridade: 'urgente',
    status: 'pendente'
  },
  {
    tituilo: 'Estudar JavaScript',
    descricao: 'Ver a aula 3 da EBAC',
    prioridade: 'importante',
    status: 'pendente'
  }
]

const ListaDeTarefas = () => (
  <S.Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.tituilo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.tituilo}
            prioridade={t.prioridade}
            status={t.status}
          />
        </li>
      ))}
    </ul>
  </S.Container>
)

export default ListaDeTarefas
