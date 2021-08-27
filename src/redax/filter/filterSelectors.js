export const filterSelector = (state) => state.filter.filter;

export const getTaskFilteredSelector = (state) =>
 state.tasks.tasks.filter((task) =>
  task.name?.toLowerCase().includes(state.filter?.filter.toLowerCase())
 );
