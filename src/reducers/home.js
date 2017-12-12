import {TOGGLE_HOME} from '../actions/home'

export default function reducer (state = {
  home: false
}, action) {
  switch (action.type) {
    case TOGGLE_HOME: {
      return {...state, home: !state.home}
    }
  }

  return state
}
