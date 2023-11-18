interface user {
  id: string;
  username: string;
  name: string;
  email: string | null;
  email_verified: boolean | null;
  has_password: boolean | null;
  has_totp: boolean | null;
}
