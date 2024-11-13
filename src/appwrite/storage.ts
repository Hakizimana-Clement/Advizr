import { Client, Databases, ID, Storage } from "appwrite";
import conf from "../conf/conf";

export class StorageService {
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

  // bucket  service
  async uploadFile(file: File) {
    console.log("file to upload ", file);
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error: unknown) {
      console.log("Appwrite service :: uploadFile() :: ", error);
      return false;
    }
  }

  async deleteFile(fileID: string) {
    try {
      return await this.bucket.deleteFile(conf.appwriteBucketId, fileID);
    } catch (error: unknown) {
      console.log("Appwrite service :: deleteFile() :: ", error);
      return false;
    }
  }

  getFilePreview(fileID: string) {
    return this.bucket.getFilePreview(conf.appwriteBucketId, fileID);
    // return this.bucket.getFilePreview(conf.appwriteBucketId, fileID).href;
  }
}

const storageService = new StorageService();
export default storageService;
