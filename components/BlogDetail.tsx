import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { Calendar, User, ArrowLeft, Share2, Clock } from 'lucide-react';

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Article Not Found</h2>
          <Link to="/blog" className="text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-white">
      <article className="container mx-auto px-6 max-w-4xl">
        {/* Back Link */}
        <Link to="/blog" className="inline-flex items-center text-slate-500 hover:text-orange-600 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Articles
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              {post.category}
            </span>
            <span className="text-slate-400 text-sm flex items-center gap-1">
              <Clock className="w-4 h-4" /> 5 min read
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between border-b border-slate-100 pb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-900 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm">{post.author}</p>
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                </div>
              </div>
            </div>
            <button className="text-slate-400 hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-blue-50">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden mb-12 shadow-xl">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-indigo max-w-none text-slate-700 leading-relaxed">
           <p className="text-xl text-slate-500 mb-8 italic border-l-4 border-orange-500 pl-4">
             {post.excerpt}
           </p>
           {post.content}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-slate-50 p-8 rounded-2xl border border-slate-200 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to start your journey?</h3>
          <p className="text-slate-600 mb-6">Our experts can guide you through every step mentioned in this article.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-orange-600 rounded-xl hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/30"
          >
            Get Free Counseling
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogDetail;