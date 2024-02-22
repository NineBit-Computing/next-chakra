import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function Loading() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div style={{ display: "flex" }}>
        <Skeleton containerClassName="flex-1" />
      </div>
    </SkeletonTheme>
  );
}
