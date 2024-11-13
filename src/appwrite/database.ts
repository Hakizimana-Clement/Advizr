import { Client, Databases, ID, Query, Storage } from "appwrite";
import conf from "../conf/conf";

interface Props {
  id: string;
  advice: string;
  status: string;
  userId: string;
  slug: string;
}

export class DatabaseService {
  client: Client;
  databases: Databases;
  bucket: Storage;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteProjectUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  // database service
  async getAdvice({ slug }: Props) {
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

  // async getAdvices(queries:boolean[] = [Query.equal('isSaved',"true")]){
  async getAdvices(queries: string[] = [Query.equal("status", "true")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error: unknown) {
      console.log("Appwrite service :: getAdvices() :: ", error);
      return false;
    }
  }

  async saveAdvice({ advice, id, status, userId }: Props) {
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

  async updateAdvice(slug: string, { status }: Props) {
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
