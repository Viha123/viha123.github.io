import React from 'react';

const Tags = ({ posts, selectedTag, onTagSelect }) => {
  // Safely extract all unique tags with their post counts
  if (!posts || posts.length === 0) {
    return null; // Don't render anything if no posts
  }

  const tagCounts = {};
  posts.forEach(post => {
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach(tag => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    }
  });

  const allTags = Object.keys(tagCounts).sort();
  const totalPosts = posts.length;

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 text-peach-150">Filter by Tags:</h3>
      <div className="flex flex-wrap gap-2">
        {/* All posts button */}
        <button
          onClick={() => onTagSelect(null)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
            selectedTag === null
              ? 'bg-peach-150 text-zinc-900'
              : 'bg-zinc-700 text-white hover:bg-zinc-600'
          }`}
        >
          All Posts ({totalPosts})
        </button>
        
        {/* Individual tag buttons */}
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagSelect(tag)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              selectedTag === tag
                ? 'bg-peach-150 text-zinc-900'
                : 'bg-zinc-700 text-highlight-green hover:bg-zinc-600'
            }`}
          >
            {tag} ({tagCounts[tag]})
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tags;