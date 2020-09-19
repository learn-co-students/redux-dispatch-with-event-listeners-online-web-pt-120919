// add code snippets from README
let state = {count: 0}
 
function reducer(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1};
    default:
      return state;
  }
}