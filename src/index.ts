export interface NameOptions {
  lastNameUpperCase?: boolean;
}

export function name(firstName: string, lastName: string, options?: NameOptions) {
  if (options?.lastNameUpperCase) {
    return firstName + ' ' + lastName.toLocaleUpperCase();
  }
  return firstName + ' ' + lastName;
}
