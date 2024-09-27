import config from "../config/config";
import { Client, Account, ID } from "appwrite";


export class AuthService {

    client = new Client()
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl) 
            .setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
    }



    async Signup({name, email, password}) {
        try {
            const createUser = await this.account.create(
                ID.unique(),
                name,
                email, 
                password
            );

            if (createUser) {
                authService.login({email, password})
            }else{
                return createUser
            }
        } catch (error) {
            console.log("Appwrite serive :: Signup :: error", error);
            throw error
        }
    }


    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(
                email, 
                password
            );
        } catch (error) {
            console.log("Appwrite serive :: login :: error", error);
            throw error
        }
    }


    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
            throw error
        }
    }
}


const authService = new AuthService()

export default authService
