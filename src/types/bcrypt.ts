export type HashPassword = (password: string) => Promise<string>;

export type ComparePassword = (
  password: string,
  hashPassword: string,
) => Promise<boolean>;
