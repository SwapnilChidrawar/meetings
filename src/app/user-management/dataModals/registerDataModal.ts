export interface RegisterUser {
  userName: string;
  emailId: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
}

export interface LoginUser {
  userName: string;
  password: string;
}
