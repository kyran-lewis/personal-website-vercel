import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import type { BlogPostData } from "../BLOG_POSTS";

interface Props {
  post: BlogPostData;
}

function BlogPost({ post }: Props) {
  const URL = useLocation();

  return (
    <article
      key={post.id}
      className="bg-amber-50 border border-amber-100 hover:border-amber-500 p-6 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-md flex flex-col h-full group"
    >
      {/* Meta information container */}
      <div className="flex items-center justify-between text-xs font-semibold text-gray-400 mb-3">
        <span className="bg-amber-500 text-white border border-amber-100 px-2.5 py-1 rounded-xl">
          {post.category}
        </span>
        <div className="flex gap-2">
          <span>{post.date}</span>
        </div>
      </div>

      {/* Title & Excerpt Content Group */}
      <div className="flex-grow">
        <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors line-clamp-2">
          {post.title}
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
          {post.summary}
        </p>
      </div>

      {/* Action Button - Locked cleanly to the bottom boundary via mt-auto */}
      <Link
        to={`/blog/${post.id}`}
        className="mt-auto pt-4 text-xs font-bold text-amber-600 group-hover:text-amber-700 inline-flex items-center gap-1 border-t border-gray-50"
      >
        Read Post{" "}
        <span className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </Link>
    </article>
  );
}

export default BlogPost;
