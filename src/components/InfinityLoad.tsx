import Loading from "@/components/Loading";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { useRef } from "react";

interface Props {
  total: number;
  current: number;
  onLoadMore: () => void;
}

const InfinityLoad = (props: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const total = props.total;
  const current = props.current;
  const canLoadMore = total > current && current > 0;

  useIntersectionObserver({
    target: ref,
    onIntersect: () => {
      if (ref.current && canLoadMore) {
        props.onLoadMore();
      }
    },
  });

  return (
    <div ref={ref} className="text-center text-sm my-4 text-slate-500">
      {canLoadMore ? (
        <Loading />
      ) : (
        "No more data"
      )}
    </div>
  );
}

export default InfinityLoad;