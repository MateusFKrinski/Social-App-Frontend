import axios, {AxiosError, AxiosResponse} from "axios";

interface AuthUserReturnedData {
    user: UserReturnedData
    token: string
}

type UserReturnedData = {
    id: string
    email: string
}

type SignInRequestData = {
    email: string;
    password: string;
}

export async function signInRequest(data: SignInRequestData): Promise<AuthUserReturnedData> {
    try {
        const response: AxiosResponse<AuthUserReturnedData> = await axios.post("http://localhost:8000/auth/user/", data);

        return response.data;
    } catch (error) {
        throw new Error((error as AxiosError).message);
    }
}

export async function recoverUserInformation(token: string) {
    try {
        const response: AxiosResponse<UserReturnedData> = await axios.post("http://localhost:8000/auth/get/user/token", token);

        return response.data;
    } catch (error) {
        throw new Error((error as AxiosError).message);
    }
}
