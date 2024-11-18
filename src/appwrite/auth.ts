/* eslint-disable no-useless-catch */
import { Account, Client, ID } from "appwrite";
import conf from "../conf/conf";

interface Props {
  email: string;
  name?: string | undefined;
  password: string;
}

export class AuthService {
  client: Client;
  account: Account;

  constructor() {
    this.client = new Client();
    this.client.setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, name = "", password }: Props) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // create at first time
        return userAccount;
      } else {
        // handle this when user is already create
        return userAccount;
      }
    } catch (error: unknown) {
      // handle this error
      throw error;
    }
  }

  async login({ email, password }: Props) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error: unknown) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error: unknown) {
      const typeError = error as Error;
      if (typeError.message === "ser (role: guests) missing scope (account)") {
        return null;
      }
    }
    return null;
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: logout():: ", error);
    }
  }
}

const authService = new AuthService();

export default authService;
