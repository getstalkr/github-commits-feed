import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { Maybe } from "Monet";

export class GithubClient {

  private config: AxiosRequestConfig;
  private client: AxiosInstance;

  constructor() {
    this.config = {
      baseURL: "https://api.github.com",
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
        accept: "application/vnd.github.v3+json",
      },
      method: "get",
    };

    this.client = axios.create(this.config);
  }

  public async getAvatarUrl(username: string) {
    try {
      const response: AxiosResponse = await this.client.get(`users/${username}`);
      return this.handleResponse(response);
    } catch (e) {
      this.handleError(e);
    }
  }

  private handleResponse(response: AxiosResponse): string {
    return response.data.avatar_url;
  }

  private handleError(error: AxiosError) {
    (error.response)
      ? ( console.log(error.response.data),
          console.log(error.response.status),
          console.log(error.response.headers) )
      : console.log("Error: ", error.message);
  }

}
