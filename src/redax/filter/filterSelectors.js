export const filterSelector = (state) => state.filter.filter;

export const getFilteredByTitleSelector = (state) =>
 state.tasks.tasks.filter((task) =>
  task.name?.toLowerCase().includes(state.filter?.filter.toLowerCase())
 );

export const filteredByNotCompletedSelector = (state) =>
    state.tasks.tasks.filter((task) => task.completed === false)
 
export const filteredByCompletedSelector = (state) =>
    state.tasks.tasks.filter((task) => task.completed === true)
 