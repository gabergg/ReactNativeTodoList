const types = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  TOGGLE_ITEM_COMPLETED: 'TOGGLE_ITEM_COMPLETED',
  REMOVE_COMPLETED: 'REMOVE_COMPLETED',
}

export const actionCreators = {
  addItem: (item) => {
    return {type: types.ADD_ITEM, payload: item}
  },
  removeItem: (index) => {
    return {type: types.REMOVE_ITEM, payload: index}
  },
  toggleItemCompleted: (index) => {
    return {type: types.TOGGLE_ITEM_COMPLETED, payload: index}
  },
  removeCompleted: (item) => {
    return {type: types.REMOVE_COMPLETED, payload: item}
  },
}

const initialState = {
  items: [],
}

export const reducer = (state = initialState, action) => {
  const {type, payload} = action
  const {items} = state

  switch(type) {
    case types.ADD_ITEM: {
      return {
        ...state,
        items: [{label: payload, completed: false}, ...items],
      }
    }
    case types.REMOVE_ITEM: {
      return {
        ...state,
        items: items.filter((item, i) => i !== payload),
      }
    }
    case types.TOGGLE_ITEM_COMPLETED: {
      return {
        ...state,
        items: items.map((item, i) => {
          if (i === payload) {
            return {label: item.label, completed: !item.completed}
          }
          return item
        }),
      }
    }
    case types.REMOVE_COMPLETED: {
      return {
        ...state,
        items: items.filter((item) => !item.completed)
      }
    }
    default: {
      return state
    }
  }
}
