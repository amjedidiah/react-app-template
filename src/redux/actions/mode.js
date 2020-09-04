// Type imports
import { DARK_MODE, LIGHT_MODE } from './types/modeTypes.js';

// Dark mode action
export const darkMode = () => ({
  type: DARK_MODE
});

export const lightMode = () => ({
  type: LIGHT_MODE
});
