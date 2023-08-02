export interface IRepoInfo {
  name: string; // 仓库名称
  id: number; // id
  html_url: string; // 地址
  stargazers_count: number; // star数
  forks_count: number; // fork 数
  open_issues: number; // issue 数
  owner: {
    avatar_url: string; // 所有者头像地址
    login: string; // 所有者登录名
  };
}

export interface IUserInfo {
  followers: number; // 被关注数
  following: number; // 关注数
  public_repos: number; // 公开仓库数
  public_gists: number; // 公开gist数
  html_url: string; // 地址
  id: string;
  login: string; // 登录名
  avatar_url: string; // 头像地址
  location: string | null; // 所在地
}
