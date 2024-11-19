import { Client, Databases, ID, Query, Storage } from "appwrite";
import conf from "../conf/conf";
import userInfo from "../utils/userDetails";
import { showErrorToast } from "../conf/ToastConfig";

interface IAdvice {
  id: number;
  advice: string;
  status: string;
  userId: string;
  slug: string;
}

// const userData = await userInfo();

export class DatabaseService {
  client: Client;
  databases: Databases;
  bucket: Storage;

  constructor() {
    this.client = new Client();
    this.client
      .setEndpoint(conf.appwriteProjectUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  // database service
  async getAdvice({ slug }: IAdvice) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error: unknown) {
      console.log("Appwrite service :: getAdvice() :: ", error);
      return false;
    }
  }

  async getAdvices(): Promise<IAdvice[] | undefined> {
    try {
      const userData = await userInfo();

      if (!userData?.$id) {
        showErrorToast("user Not logged in");
        return [];
      }

      const res = await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        [
          Query.equal("userId", [userData.$id]),
          // Query.equal("status", ["false"]),
        ]
      );
      return res.documents as unknown as IAdvice[];
    } catch (error: unknown) {
      const typeError = error as Error;
      console.log("Appwrite service :: getAdvices() :: ", typeError);
      return [];
    }
  }

  async saveAdvice({ advice, id, status, userId }: IAdvice) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID.unique(),
        {
          id,
          advice,
          status,
          userId,
        }
      );
    } catch (error: unknown) {
      console.log("Appwrite service :: saveAdvice() :: ", error);
      return false;
    }
  }

  async updateAdvice(slug: string, { status }: IAdvice) {
    console.log("---------- document id to update advice in bookmark: ", slug);
    // async updateAdvice({status:string}){
    try {
      // return await this.databases.updateDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,ID.unique())
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        { status }
      );
    } catch (error: unknown) {
      console.log("Appwrite service :: updateAdvice() :: ", error);
      return false;
    }
  }

  async deleteAdvice(slug: string) {
    console.log("---------- document id to delete advice in bookmark: ", slug);
    // async updateAdvice({status:string}){
    try {
      // return await this.databases.updateDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,ID.unique())
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error: unknown) {
      console.log("Appwrite service :: deleteAdvice() :: ", error);
      return false;
    }
  }
}

const databaseService = new DatabaseService();
export default databaseService;
