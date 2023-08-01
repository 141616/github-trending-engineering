import InfinityLoad from "@/components/InfinityLoad";
import RepoCard from "@/components/RepoCard";
import RepoCardListSkeleton from "@/components/RepoCardListSkeleton";
import { IRepoInfo } from "@/types";

interface Props {
  loading: boolean
  repos: IRepoInfo[];
  total: number;
  onLoadMore: () => void;
}

const RepoCards = (props: Props) => {
  if (props.loading && props.repos.length === 0) {
    return <RepoCardListSkeleton />;
  }

  if (props.repos.length === 0) {
    return (
      <div className="py-10 text-sm text-center text-slate-500">No Data</div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-around flex-wrap -mx-2">
        {props.repos.map((item, index) => {
          return (
            <RepoCard
              data={item}
              key={`${item.id}-${index}`}
              indexKey={index + 1}
            />
          );
        })}
      </div>
      <InfinityLoad
        total={props.total}
        current={props.repos.length}
        onLoadMore={props.onLoadMore}
      />
    </div>
  );
}

export default RepoCards;