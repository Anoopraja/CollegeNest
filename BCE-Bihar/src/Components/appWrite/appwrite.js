import conf from "../appWrite/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
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
        } catch (_) {
            // no active session, ignore
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
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {
        try {
            if (this.account){
                const logout = await this.account.deleteSessions()
                return logout;
            };
        } catch (error) {
            console.log("jaaa logout nhi hua", error);
        }
    }
}

const authService = new AuthService();

export default authService