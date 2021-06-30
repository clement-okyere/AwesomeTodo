export const getToken = (name: string) => {
    return localStorage.getItem(name);
}


export const setToken = (name: string, value: string) => {
  return localStorage.setItem(name, value);
};