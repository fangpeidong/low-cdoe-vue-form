export function insertNewComponent(state, newComponent) {
  const { selectedId, componentList } = state;
  const index = componentList.findIndex((c) => c.fe_id === selectedId);
  if (index < 0) {
    state.componentList.push(newComponent);
  } else {
    state.componentList.splice(index + 1, 0, newComponent);
  }
  state.selectedId = newComponent.fe_id;
}
