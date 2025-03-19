/// KEYS
const TOKEN = "TOKEN"

/// METHOD
const localStorageManager = {
    setToken: (value) => {
      try {
        localStorage.setItem(TOKEN, JSON.stringify(value));
      } catch (error) {
        console.error(`Error saving token from localStorage`, error);
      }
    },
    getToken: () => {
      try {
        const value = localStorage.getItem(TOKEN);
        return value ? JSON.parse(value) : null;
      } catch (error) {
        console.error(`Error reading key token from localStorage`, error);
        return null;
      }
    },

    clearToken: (key) => {
      try {
        localStorage.removeItem(TOKEN);
      } catch (error) {
        console.error(`Error removing token from localStorage`, error);
      }
    },
  
    clear: () => {
      try {
        localStorage.clear();
      } catch (error) {
        console.error("Error clearing localStorage", error);
      }
    }
  };
  
  export default localStorageManager;