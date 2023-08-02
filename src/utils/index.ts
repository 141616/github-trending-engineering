export const getLanguageFromUrl = (search: string) => {
  const searchParams = new URLSearchParams(search);
  return searchParams.get("language") || "All";
};

export const getPlayersFromUrl = (search: string) => {
  const searchParams = new URLSearchParams(search);
  const playerOne = searchParams.get("playerOne") || "";
  const playerTwo = searchParams.get("playerTwo") || "";
  return { playerOne, playerTwo };
};

const repoUrl = "https://api.github.com/search/repositories";
/**
 * 生成 github 热门项目请求接口 url
 * @param {*} language 语言
 * @param {*} page 页数
 * @returns
 */
export function generateUrl(language: string, page: number) {
  let q = `&q=stars%3A>1`;
  if (language !== "All") {
    q += encodeURIComponent(` language:${language}`);
  }
  return `${repoUrl}?sort=stars&order=desc&type=Repositories&page=${page}&per_page=10${q}`;
}

export function generatePushUrl(language: string) {
  if (language === "All") {
    return `${window.location.origin}${window.location.pathname}`;
  }
  return `${window.location.origin}${window.location.pathname}?language=${language}`;
}
