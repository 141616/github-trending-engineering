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
