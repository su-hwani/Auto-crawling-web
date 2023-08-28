export default class Member {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async loginInfo() {
    return this.apiClient.login()
    .then((res) =>  res.data.info)
}
}
