import { Client, Databases, ID, Query, Storage } from "appwrite";
import conf from "../conf/conf";
import { showErrorToast } from "../conf/ToastConfig";
import userInfo from "../utils/userDetails";

interface AdviceProps {
  id: number;
  advice: string;
  status: string;
  userId: string;
  $id?: string;
}

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
  async getAdvice({ id }: AdviceProps) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        id.toString()
      );
    } catch (error: unknown) {
      console.log("Appwrite service :: getAdvice() :: ", error);
      return false;
    }
  }

  async getAdvices(): Promise<AdviceProps[] | undefined> {
    try {
      const userData = await userInfo();

      if (!userData?.$id) {
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
      return res.documents as unknown as AdviceProps[];
    } catch (error: unknown) {
      const typeError = error as Error;
      console.log("Appwrite service :: getAdvices() :: ", typeError);
      return [];
    }
  }

  async saveAdvice({ id, advice, userId, status }: AdviceProps) {
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

  async updateAdvice(slug: string, { status }: AdviceProps) {
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

  async deleteAdvice(documentId: string) {
    try {
      if (!documentId) {
        showErrorToast("documentId is missing");
        return;
      }

      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        documentId
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
