// Simple frontmatter parser for browser environment
const parseFrontmatter = (content) => {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return {
      data: {},
      content: content
    };
  }
  
  const frontmatterText = match[1];
  const markdownContent = match[2];
  
  // Simple YAML parser for basic frontmatter
  const frontmatter = {};
  const lines = frontmatterText.split('\n');
  
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    
    const colonIndex = trimmed.indexOf(':');
    if (colonIndex === -1) continue;
    
    const key = trimmed.substring(0, colonIndex).trim();
    let value = trimmed.substring(colonIndex + 1).trim();
    
    // Remove quotes
    if ((value.startsWith('"') && value.endsWith('"')) || 
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    
    // Handle arrays (basic support for tags)
    if (value.startsWith('[') && value.endsWith(']')) {
      try {
        value = JSON.parse(value);
      } catch (e) {
        // Fallback: split by comma and clean up
        value = value.slice(1, -1).split(',').map(item => 
          item.trim().replace(/['"]/g, '')
        );
      }
    }
    
    frontmatter[key] = value;
  }
  
  return {
    data: frontmatter,
    content: markdownContent
  };
};

// Utility to fetch and parse markdown files
export const fetchMarkdownPost = async (filename) => {
  try {
    const response = await fetch(`/posts/${filename}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${filename}`);
    }
    const markdownContent = await response.text();
    
    // Parse frontmatter and content with our custom parser
    const { data: frontmatter, content } = parseFrontmatter(markdownContent);
    
    return {
      frontmatter,
      content
    };
  } catch (error) {
    console.error('Error fetching markdown:', error);
    return null;
  }
};

// Utility to fetch the posts index
export const fetchPostsIndex = async () => {
  try {
    const response = await fetch('/posts/posts.json');
    if (!response.ok) {
      throw new Error('Failed to fetch posts index');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching posts index:', error);
    return [];
  }
};

// Utility to get a specific post by ID
export const getPostById = async (id) => {
  try {
    const posts = await fetchPostsIndex();
    const postMeta = posts.find(post => post.id === parseInt(id));
    
    if (!postMeta) {
      console.log('Post not found in index');
      return null;
    }
    
    const markdownData = await fetchMarkdownPost(postMeta.filename);
    
    if (!markdownData) {
      console.log('Markdown file not found');
      return null;
    }
    
    return {
      id: postMeta.id,
      title: markdownData.frontmatter.title || postMeta.title,
      date: markdownData.frontmatter.date || postMeta.date,
      excerpt: markdownData.frontmatter.excerpt || postMeta.excerpt,
      tags: markdownData.frontmatter.tags || postMeta.tags || [],
      content: markdownData.content
    };
  } catch (error) {
    console.error('Error in getPostById:', error);
    return null;
  }
};