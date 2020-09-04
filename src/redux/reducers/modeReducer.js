// Declare Store Auth object
const INIT = {
  color: 'dark'
};

// Export Store Auth object
export default (state = INIT, action) => ({
  DARK_MODE: { ...state, mode: 'dark' },
  LINK_MODE: { ...state, mode: 'white' }
}[action.type] || state);
