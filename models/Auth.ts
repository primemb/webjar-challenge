export interface Auth {
  _id: string;
  userName: string;
  token: {
    accessToken: string;
    refreshToken: string;
  };
  fullName: string;
}
