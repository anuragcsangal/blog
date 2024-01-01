import Link from "next/link";
import { Blogpost } from "@/types";
import getFormattedDate from "@/lib/getFormattedDate";
import { redRose } from "@/lib/fonts";

type Props = {
  post: Blogpost;
};

const ListItem = ({ post }: Props) => {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);
  return (
      <div>
        <li className="text-2xl border-b-2 border-b-gray-300 py-5 px-4 md:text-3xl">
          <Link
            className={`${redRose.className} font-light`}
            href={`/posts/${id}`}
          >
            {title}
          </Link>
          <br />
          <p className="text-sm font-extralight md:text-sm">{formattedDate}</p>
        </li>
      </div>
  );
};

export default ListItem;
