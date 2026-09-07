import conf from "../appWrite/conf.js";
import { Query } from "appwrite";
import { Client, Account, ID, Databases } from "appwrite";
export class AuthService {
    client = new Client();
    // databases = new Databases(client);
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
        // this.storage = new Storage(this.client);
        this.databases = new Databases(this.client);
    }



    async uploadCollegeImage(file) {
        try {
            const response = await this.storage.createFile(
                "college-images",
                ID.unique(),
                file
            );

            return response;
        } catch (error) {
            console.error("Image upload failed:", error);
            throw error;
        }
    }


    async saveCollegeImage({ collegeId, imageUrl }) {
        try {
            const response = await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteImageUpload,
                ID.unique(),
                {
                    collegeID: Number(collegeId),
                    imageUrl: imageUrl,
                }
            );

            return response;
        } catch (error) {
            console.error("Failed to save image:", error);
            throw error;
        }
    }

    // async createProfile(profileData) {
    //     try {
    //         return await this.databases.createDocument(
    //             this.config.databaseId,
    //             this.config.profileCollectionId,
    //             ID.unique(),
    //             profileData
    //         );
    //     } catch (error) {
    //         console.error("Profile creation failed:", error);
    //         throw error;
    //     }
    // }

    async getCollegeImages(collegeId) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteImageUpload,
                [
                    Query.equal("collegeID", Number(collegeId))
                ]
            );
        }
        catch (error) {
            console.error("mill nhi rha hai phutu")
        }
    }

    async gmailVerification() {
        try {
            const userVerification = await this.account.createVerification(ID.unique(), "collegenest.anooplofi.me/verify");
            console.log("Gmail verification sent:", userVerification);
            return userVerification;
        }
        catch (e) {
            console.error("sali gamil daal dalle", e);
        }
    }
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({ email, password });
                console.log("Account created:", userAccount);
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            try {
                await this.account.deleteSessions();
            } catch (e) {
                console.error("Error deleting sessions:", e);
            }

            const login = await this.account.createEmailPasswordSession(email, password);
            console.log("LOGIN ho gya:", login);
            return login;
        } catch (error) {
            console.error("LOGIN ERROR:", error);
            throw error;
        }

    }

    async getCurrentUser() {
        try {
            const userAccount = await this.account.get();
            return userAccount;
        } catch (error) {
            console.log("kuchu puchu tum kaha ho", error);
        }

        return null;
    }

    async logout() {
        try {
            if (this.account) {
                const logout = await this.account.deleteSessions()
                return logout;
            };
        } catch (error) {
            console.log("jaaa logout nhi hua", error);
        }
    }

}

const authService = new AuthService();

// export const storage = new Storage(client);
export default authService
// export const databases = new Databases(client);
