export type loadingAT = {
  type: 'LOADING'
  isLoading: boolean
}

export type ActionType = loadingAT

type StateType = {
  isLoading: boolean
}

const initState: StateType = {
  isLoading: false,
}

export const loadingReducer = (state: StateType = initState, action: ActionType): StateType => {
  switch (action.type) {
    case 'LOADING': {
      return {...state, isLoading: action.isLoading}
    }
    default:
      return state
  }
}

export const loadingAC = (isLoading: boolean): loadingAT => ({
  type: 'LOADING',
  isLoading,
})