import { getSortedPostsData } from "@/lib/posts";
import ListItem from "./ListItem";

const Posts = () => {
  const posts = getSortedPostsData();
  return (
    <section className="max-w-full flex flex-col justify-center">
      <ul className="w-full">
        {posts.map((post) => {
          return <ListItem key={post.id} post={post} />;
        })}
      </ul>
      <p className="text-xs font-extralight pl-4 mt-2">Coming&nbsp;Soon...</p>
    </section>
  );
};

export default Posts;
