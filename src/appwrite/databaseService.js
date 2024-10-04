import config from "../config/config";
import { Client, Databases, Storage, Query, ID } from "appwrite";


export class DatabaseService {

    client = new Client()
    databases;
    storage;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl) 
            .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }


    async createPost({title, slug, content, featuredImage, status, userId}) {
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                { 
                    title,
                    content, 
                    featuredImage, 
                    status, 
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
            throw error
        }
    }


    async updatePost(slug, {title, content, featuredImage, status}) {
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            );
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
            throw error
        }
    }


    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            );

            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            throw error
        }
    }


    async getPost(slug){
        try {  
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            throw error
        }
    }


    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries
            );
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            throw error
        }
    }


    async getMyPosts(userId) {
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                [Query.equal("userId", userId)]
            );
        } catch (error) {
            console.log("Appwrite serive :: getMyPosts :: error", error);
            throw error
        }
    }



    // file upload service

    async uploadFile(file) {
        try {
            return await this.storage.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            throw error
        }
    }


    async getFile(fileId) {
        try {
            return await this.storage.getFile(
                config.appwriteBucketId,
                fileId
            );
        } catch (error) {
            console.log("Appwrite serive :: getFile :: error", error);
            throw error
        }
    }


    async deleteFile(fileId) {
        try {
            return await this.storage.deleteFile(
                config.appwriteBucketId,
                fileId
            );
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            throw error
        }
    }


    getFilePreview(fileId) {
        try {
            return this.storage.getFilePreview(
                config.appwriteBucketId,
                fileId
            );
        } catch (error) {
            console.log("Appwrite serive :: getFilePreview :: error", error);
            throw error
        }
    }
    
}


const databaseService = new DatabaseService();

export default databaseService