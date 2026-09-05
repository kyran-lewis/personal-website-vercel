import fm from "front-matter";
import post1 from "./blog-posts/building-my-website.md?raw";
import post2 from "./blog-posts/post2.md?raw";

export interface BlogPostData {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string; // dd/mm/yyyy
  category: "Testing" | "Frontend" | "Backend" | "DevOps";
}

export const BLOG_POSTS_NEW = [post1, post2];

export const PARSED_BLOG_POSTS = BLOG_POSTS_NEW.map((rawPost) => {
  const { attributes, body } = fm<BlogPostData>(rawPost);
  return {
    title: attributes.title,
    date: attributes.date,
    summary: attributes.summary,
    category: attributes.category,
    id: attributes.id,
    content: body,
  };
});
