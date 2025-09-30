import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getPostById } from '../utils/markdownUtils';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to handle back to blog navigation
  const handleBackToBlog = () => {
    navigate('/blog');
  };

  useEffect(() => {
    const loadPost = async () => {
      try {
        console.log('Loading post with ID:', id);
        setLoading(true);
        const postData = await getPostById(id);
        console.log('Post data loaded:', postData);
        if (postData) {
          setPost(postData);
        } else {
          setError('Post not found');
        }
      } catch (err) {
        setError('Error loading post');
        console.error('Error loading post:', err);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [id]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-900 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-peach-150">Loading post...</h1>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-zinc-900 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-peach-150">Post Not Found</h1>
          <button 
            onClick={handleBackToBlog}
            className="px-4 py-2 bg-peach-150 text-zinc-900 rounded-lg hover:bg-peach-200 transition-colors"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900 pt-20">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <button
          onClick={handleBackToBlog}
          className="mb-6 inline-block px-4 py-2 bg-peach-150 text-zinc-900 rounded-lg hover:bg-peach-200 transition-colors"
        >
          ← Back to Blog
        </button>
        
        <article className="bg-zinc-800 rounded-lg p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-peach-150">
              {post.title}
            </h1>
            <p className="text-gray-400">
              Published on {formatDate(post.date)}
            </p>
          </header>
          
          <div className="prose prose-invert max-w-none text-white leading-relaxed">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold mb-4 text-peach-150">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-semibold mb-3 text-peach-150">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-medium mb-2 text-peach-150">{children}</h3>
                ),
                p: ({ children }) => (
                  <p className="mb-4 text-white">{children}</p>
                ),
                strong: ({ children }) => (
                  <strong className="font-bold text-highlight-green">{children}</strong>
                ),
                em: ({ children }) => (
                  <em className="italic">{children}</em>
                ),
                code: ({ children, className }) => {
                  const isBlock = className?.includes('language-');
                  if (isBlock) {
                    return (
                      <pre className="bg-zinc-800 p-4 rounded-lg overflow-x-auto mb-4">
                        <code className={className?.includes('javascript') ? 'text-green-400' : 'text-gray-300'}>
                          {children}
                        </code>
                      </pre>
                    );
                  }
                  return (
                    <code className="bg-zinc-800 px-2 py-1 rounded text-peach-150 font-mono">
                      {children}
                    </code>
                  );
                },
                ul: ({ children }) => (
                  <ul className="mb-4 ml-4">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="mb-4 ml-4">{children}</ol>
                ),
                li: ({ children }) => (
                  <li className="mb-1 text-white">{children}</li>
                ),
                img: ({ src, alt }) => {
                  // Handle relative image paths
                  const imageSrc = src.startsWith('/') ? src : `/posts/images/${src}`;
                  return (
                    <img 
                      src={imageSrc} 
                      alt={alt || ''} 
                      className="w-full max-w-2xl mx-auto rounded-lg shadow-lg my-6 block"
                      loading="lazy"
                      onError={(e) => {
                        console.error('Image failed to load:', imageSrc);
                        e.target.style.display = 'none';
                      }}
                    />
                  );
                },
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-peach-150 pl-4 my-4 italic text-gray-300">
                    {children}
                  </blockquote>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
          
          {/* Tags section at the bottom */}
          {post.tags && post.tags.length > 0 && (
            <footer className="mt-8 pt-6 border-t border-zinc-700">
              <h3 className="text-lg font-semibold mb-3 text-peach-150">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-zinc-700 text-highlight-green text-sm rounded-full hover:bg-zinc-600 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </footer>
          )}
        </article>
      </div>
    </div>
  );
};

export default BlogPost;