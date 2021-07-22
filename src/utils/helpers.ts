export const getItem = (name: string) => {
    return localStorage.getItem(name);
}


export const setItem = (name: string, value: string): void => {
  return localStorage.setItem(name, value);
};

export const removeItem = (name: string) => {
  return localStorage.removeItem(name);
};

export const getInitials = (fullname: string): string => {
  let split = fullname.split(" ");
  let initials = "";
  split.forEach((name: string) => {
    initials += name[0];
  });

  return initials;
}

export const getFirstName = (fullname: string): string => {
  let split = fullname.split(" ");
  return split[0];
};