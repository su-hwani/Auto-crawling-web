export default class Member {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async loginInfo() {
    const response = await this.apiClient.login(this.apiClient.id);
    return response;
    // return customer;
}
}
