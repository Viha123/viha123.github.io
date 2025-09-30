import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchPostsIndex } from '../utils/markdownUtils';
import Tags from './Tags';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        console.log('Fetching posts index...');
        const postsData = await fetchPostsIndex();
        console.log('Posts loaded:', postsData);
        if (postsData && postsData.length > 0) {
          setPosts(postsData);
        } else {
          console.log('No posts found');
          setPosts([]);
        }
      } catch (error) {
        console.error('Error loading posts:', error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  // Filter posts based on selected tag
  useEffect(() => {
    if (selectedTag) {
      const filtered = posts.filter(post => 
        post.tags && post.tags.includes(selectedTag)
      );
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(posts);
    }
  }, [posts, selectedTag]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-900 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-peach-150">Loading posts...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900 pt-20">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-peach-150">
          My Blog
        </h1>
        
        <Tags 
          posts={posts} 
          selectedTag={selectedTag} 
          onTagSelect={setSelectedTag} 
        />
        
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-gray-400 mb-4">
              {posts.length === 0 ? "No blog posts yet" : "No posts found for this tag"}
            </h2>
            <p className="text-gray-500">
              {posts.length === 0 
                ? "Check back soon for new content!" 
                : "Try selecting a different tag or view all posts."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="block"
              >
                <article className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl cursor-pointer transform hover:scale-105 transition-all duration-300">
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-3 text-peach-150">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 text-sm mb-3">
                      {formatDate(post.date)}
                    </p>
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-zinc-700 text-highlight-green text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="text-peach-150 font-medium hover:underline">
                      Read more →
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;