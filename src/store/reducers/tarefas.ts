import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar Java',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      'Estudar Redux',
      1
    ),
    new Tarefa(
      'Estudar React',
      enums.Prioridade.NORMAL,
      enums.Status.PENDENTE,
      'Estudar React',
      2
    ),
    new Tarefa(
      'Estudar Redux',
      enums.Prioridade.NORMAL,
      enums.Status.CONCLUIDA,
      'Estudar Redux',
      3
    ),
    new Tarefa(
      'Estudar TypeScript',
      enums.Prioridade.URGENTE,
      enums.Status.CONCLUIDA,
      'Estudar TypeScript',
      4
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      return state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions
export default tarefasSlice.reducer
