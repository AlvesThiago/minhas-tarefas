import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefaState = {
  itens: Tarefa[]
}

const initialState: TarefaState = {
  itens: [
    {
      id: 1,
      descricao: 'Descrição da tarefa 1',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE,
      titulo: 'Tarefa 1'
    },
    {
      id: 2,
      descricao: 'Descrição da tarefa 2',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.CONCLUIDA,
      titulo: 'Tarefa 2'
    },
    {
      id: 3,
      descricao: 'Descrição da tarefa 3',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE,
      titulo: 'Tarefa 3'
    },
    {
      id: 4,
      descricao: 'Descrição da tarefa 4',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE,
      titulo: 'Tarefa 4'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
      return state
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const index = state.itens.findIndex((t) => t.id === action.payload.id)
      if (index >= 0) {
        state.itens[index] = action.payload
      }
    }
  }
})

export const { remover, editar } = tarefasSlice.actions
export default tarefasSlice.reducer
