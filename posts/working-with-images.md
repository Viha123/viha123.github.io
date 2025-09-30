---
title: "Working with Images in Your Blog"
date: "2024-03-25"
excerpt: "Learn how to add and manage images in your blog posts effectively."
tags: ["tutorial", "images", "markdown"]
---

# Working with Images in Your Blog

Images make your blog posts more engaging and help illustrate your points. Here's how to work with them effectively.

## Adding Images

You can add images using standard markdown syntax:

```markdown
![Alt text](/posts/images/my-image.png)
```

## Image Best Practices

### 1. Optimize Your Images
- **Keep file sizes reasonable** (under 500KB for web)
- **Use appropriate formats**: JPG for photos, PNG for graphics with transparency
- **Consider WebP** for better compression

### 2. Accessibility
- **Always include alt text** to describe your images
- **Make alt text descriptive** but concise

### 3. Responsive Images
All images in this blog are automatically responsive thanks to our CSS styling.

## Example Image

Here's an example of how an image would appear in your blog:

![Sample blog image showing a demo](/posts/images/my-image.png)

## From Obsidian

When working with Obsidian:

1. **Drag and drop** images into your note
2. **Copy images** to `public/posts/images/` when exporting
3. **Update the path** from `![[image.jpg]]` to `![Alt text](/posts/images/image.jpg)`

## Captions

You can add captions by following an image with emphasized text:

![Another example image](/posts/images/my-image.png)
*Figure 1: A sample image demonstrating how images appear in blog posts*

Happy blogging with images!