# Blog Setup Guide

Your blog now supports importing markdown files from Obsidian or any markdown editor! Here's how it works:

## How to Add New Blog Posts

### Method 1: From Obsidian (Recommended)

1. **Write your post in Obsidian** with frontmatter at the top:
   ```markdown
   ---
   title: "Your Post Title"
   date: "2024-03-15"
   excerpt: "A brief description of your post"
   tags: ["tag1", "tag2", "tag3"]
   ---

   # Your Post Title

   Your content here...
   ```

2. **Export your markdown file** and save it in `public/posts/your-post-name.md`

3. **Update the posts index** in `public/posts/posts.json`:
   ```json
   {
     "id": 4,
     "title": "Your Post Title", 
     "date": "2024-03-15",
     "excerpt": "A brief description of your post",
     "filename": "your-post-name.md",
     "tags": ["tag1", "tag2", "tag3"]
   }
   ```

### Method 2: Direct File Creation

1. Create a new `.md` file in `public/posts/`
2. Add frontmatter at the top (see example above)
3. Write your content in markdown
4. Update `public/posts/posts.json` with the new post metadata

## Supported Markdown Features

Thanks to `react-markdown` and `remark-gfm`, your blog supports:

- **Headers** (`#`, `##`, `###`)
- **Bold** and *italic* text
- `Inline code` and code blocks
- Lists (ordered and unordered)
- Links and images
- Tables (GitHub Flavored Markdown)
- Strikethrough text
- Task lists
- And much more!

## File Structure

```
public/
  posts/
    posts.json              # Index of all posts
    getting-started-with-react.md
    building-portfolio-website.md
    my-journey-in-software-development.md
    your-new-post.md        # Your new posts here
```

## Obsidian Integration Tips

1. **Use consistent frontmatter** - Set up a template in Obsidian
2. **Export images** - Place images in `public/posts/images/` and reference them
3. **Internal links** - Convert Obsidian `[[links]]` to standard markdown `[links]()`
4. **Tags** - Use Obsidian tags or frontmatter tags (frontmatter takes precedence)

## Working with Images

### Adding Images to Your Posts

1. **Place images** in `public/posts/images/` folder
2. **Reference in markdown**:
   ```markdown
   ![Alt text description](/posts/images/your-image.jpg)
   ```

### From Obsidian Workflow

1. **In Obsidian**: Drag/drop images into your note
2. **When exporting**:
   - Copy images from your Obsidian vault to `public/posts/images/`
   - Convert `![[image.jpg]]` to `![Alt text](/posts/images/image.jpg)`
   - Update all image references

### Image Best Practices

- **Optimize file sizes** (under 500KB recommended)
- **Use descriptive alt text** for accessibility
- **Supported formats**: JPG, PNG, WebP, SVG, GIF
- **Responsive**: Images automatically scale on mobile

### Example:
```markdown
![My awesome project screenshot](/posts/images/project-demo.png)
*Figure 1: The main dashboard of my portfolio website*
```

## Deployment

When you push to GitHub, your new posts will automatically be available on your deployed site!

## Advanced Features

- **Syntax highlighting** for code blocks
- **Custom styling** with Tailwind CSS
- **SEO-friendly** URLs (`/blog/post-id`)
- **Responsive design** that works on all devices
- **Fast loading** with React optimization