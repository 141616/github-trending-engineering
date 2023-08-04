import LanguageTabs from "@/components/LanguageTabs";
import MyIcon from "@/components/MyIcon";
import RepoCards from "@/components/RepoCards";
import { IRepoInfo } from "@/types";
import { generatePushUrl, generateUrl, getLanguageFromUrl } from "@/utils";
import { useEffect, useRef, useState } from "react";

interface Props { }

const TrendingPage = (props: Props) => {
  const [total, setTotal] = useState<number>(0);
  const [repos, setRepos] = useState<IRepoInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [params, setParams] = useState<{
    page: number;
    language: string;
  }>({
    page: 1,
    language: getLanguageFromUrl(window.location.search),
  });
  const [error, setError] = useState<string | null>(null);
  // 缓存数据
  const reposStorageMap = useRef<{[key: string]: IRepoInfo[]}>({})
  

  useEffect(() => {
    fetchRepos(params.language, params.page);
  }, []);

  const updateReposStorageMap = (items: IRepoInfo[], lang: string) => {
    reposStorageMap.current[lang] = items;
  }

  const fetchRepos = (lang: string, page: number) => {
    setLoading(true);
    setError(null);
    const url = generateUrl(lang, page);
    fetch(url)
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((data) => {
        const items = data?.items || [];
        const newItems = page === 1 ? items : [...repos, ...items];
        setRepos(newItems);
        // 只缓存每个language的第一页
        if (page === 1) {
          updateReposStorageMap(newItems, lang);
        }
        setTotal(data?.total_count || 0);
      })
      .catch((error) => {
        error.json().then((err: any) => {
          setError(err?.message || "Something went wrong");
        });
      })
      .finally(() => setLoading(false));
  };

  const handleLanguageChange = (val: string) => {
    setParams({
      language: val,
      page: 1,
    });
    const storageRepos = reposStorageMap.current?.[val] || [];
    if (storageRepos.length > 0) {
      setRepos(storageRepos);
    } else {
      setRepos([]);
      fetchRepos(val, 1);
    }
    window.history.replaceState({}, "", generatePushUrl(val));
  };

  return (
    <div className="py-4">
      <LanguageTabs
        language={params.language}
        onChange={handleLanguageChange}
      />
      {error ? (
        <div className="text-red-600 flex items-center justify-center my-10">
          <MyIcon name="error" />
          <p className="text-center font-sm ml-2">{error}</p>
        </div>
      ) : (
        <RepoCards
          loading={loading}
          repos={repos}
          total={total}
          onLoadMore={() => {
            if (loading) {
              return;
            }
            const newPage = params.page + 1;
            setParams({
              ...params,
              page: newPage,
            });

            fetchRepos(params.language, newPage);
          }}
        />
      )}
    </div>
  );
};

export default TrendingPage;