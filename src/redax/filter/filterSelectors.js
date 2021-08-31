export const filterSelector = (state) => state.filter.filter;

export const getFilteredByTitleSelector = (state) =>
 state.tasks.tasks.filter((task) =>
  task.name?.toLowerCase().includes(state.filter?.filter.toLowerCase())
 );

export const getFilteredByNotCompletedSelector = (state) =>
    state.tasks.tasks.filter((task) => task.licence === false)
 
export const getFilteredByCompletedSelector = (state) =>
    state.tasks.tasks.filter((task) => task.licence === true)
 