/*

Client ID
820d43fbef0b2128f4a6
Client Secret
163f6098ec55ebe4fc3665d283274d0235a1b9eb

*/

class Github {
  constructor(){
    this.client_id = '820d43fbef0b2128f4a6';
    this.client_secret = '163f6098ec55ebe4fc3665d283274d0235a1b9eb';
    this.repos_count =5;
    this.repo_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }


}