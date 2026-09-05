---
id: "1"
title: "Building My Personal Website"
summary: ""
date: "17 May 2026"
category: "Frontend"
---

### Why build a personal website in the first place?

#### 1. Making it easier for people to find me

#### 2. Showcasing my portfolio

Though I may not have many projects to showcase yet this website is great for give an overview of projects I'm working on and things I plan on working on in the future. I can document the process of making them, I can add release notes, I can put video tutorials on here.

#### 3. A more detailed and dynamic CV

Two pages max, one if you're being very concise. How do I get in all the detail, well you don't. When you've got a lot to say CV feels constrained, it feels like you have to leave out details. A personal website lets you elaborate and go into so much more detail. You might say that it will bore people but some people are intrigued and want to know more. Instead of snapshot pieces you can detail entire projects, explain the methdologies behind them, what mistakes did you make, what did you learn from it? Plus you can easily update you website for all to see, once a CV is sent off it's set in stone, no changes, no chance for development.

#### 4. A springboard

I wanted to use my personal website as a springboard for other more complex projects. I've got plenty of ideas of things I want to make but this has been on my list longest. A personal website gives immediate results, you write some thing it appears, you create a component and it's there. Some projects aren't so visual and take time to get to a point where there is something meaningful to show. Yeah a personal website might not have a fancy backend API and a complex relational database behind it but it's fun. It serves a real purpose for me and is a place I can show the world what I have to offer.

#### 5. A blog

### Using React

I'm very familiar with React, I've used it for more than 3 years now. I started learning it for my dissertation project at university and continued using it at my job. I've used it for small projects to complete systems for company processes. It's the most used javascript framework and has great community backing. It isn't perfect but it's solid and does what it needs to do. It lets you decide how to do things, it doesn't make decisions for you and provide you with tonnes of boilerplate code like angular.

You can split things into manageable, reusable components. This is perfect for this website, each part is broken down into sections: a hero, a footer, cards, blog posts, an email form and more. There is no need to duplicate code when you can create resusable dynamic components where only the content inside changes.

### Learning Tailwind

I've wanted an excuse to learn tailwind for a while. I try not to overcomplicate things and add too much to a stack unnecessarily plus I wanted to master the basics of web development first. Skipping CSS just to learn Tailwind isn't a good idea, I wanted to have several project where I used CSS so I could learn how to write good style sheets which don't break as soon as you add a new class to them. But eventually I needed to start looking at the industry standard frameworks and start utilising them before I got left behind.

Standardised component styles

### Markdown for blog posts

Using markdown for create blog posts makes it far easier and scalable than using raw HTML. It means the blog posts are in a clear human readable format.

It also includes syntax highlighting which help you visualise the different formatting which is available in markdown e.g. headers of varying sizes, bullet lists, etc.

Markdown is a universal and widely used format for writing blogs especially in tech. Used by websites like: hashnode, dev.to and medium.

#### Frontmatter

Frontmatter was used to split the markdown into content and metadata. You can gather the things like the date, a summary of the post and the id from the metadata written at the front of the file.

Example:

```
id: "1"
title: "Building My Personal Website"
summary: ""
date: "17 May 2026"
category: "Frontend"
```

This was useful for creating the blog cards which give an overview of what each post is about. Also, having attributes like category and date mean the posts can be sorted and filtered by the user.

#### React Markdown

React markdown, this actually separates the content into the corresponding HTML tags. It takes the markdown syntax and converts it into HTML e.g. ### -> h3. You can add specific styles to the different elements which adds another layer of customisation which is incredibly useful.

Examples:

```
pre: ({ children }) => (
    <pre className="bg-gray-100 text-gray-800 rounded-lg p-4">
        {children}
    </pre>
),
```

This creates a grey box with padding around code blocks making them standout from the rest of the text.

### Hosting

GitHub pages issues.

Vercel. Easy to deploy, does it automatically when a repo is connected. Create and account and you're off. Easily add a custom domain. Can add extra complexity when necessary, CI checks,

Workflows.

### Domain

Bought a domain after watching a presentation by Rob Miles

Godaddy

### Conclusion
