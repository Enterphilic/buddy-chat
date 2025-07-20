"use client";

import Image from "next/image";

const posts = [
  {
    title: "8 Upcoming Influencer Marketing Trends and Benefits",
    excerpt:
      "Marketing is evolving. It’s changing from a one-way street to a two-way conversa...",
    reactions: { like: 260, comment: 234, share: 123 },
  },
  {
    title: "How Influencer Marketing Affects Consumer Buying Behavior",
    excerpt:
      "As influencer marketing continues to grow, consumers have been turning to their...",
    reactions: { like: 260, comment: 234, share: 123 },
  },
];

const TrendingPosts = () => (
  <div className="mt-8 bg-white rounded-xl shadow-md border border-gray-200 p-6">
    <h2 className="text-lg font-bold mb-6">Trending Posts</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {posts.map((post, idx) => (
        <div
          key={idx}
          className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex flex-col justify-between"
        >
          <div className="mb-4">
            <div className="font-semibold text-base text-gray-800 mb-2">
              {post.title}
            </div>
            <div className="text-gray-500 text-sm">{post.excerpt}</div>
          </div>
          <div className="flex gap-4 mt-auto">
            <span className="flex items-center gap-1 text-gray-600 text-sm rounded-2xl px-2 py-1 bg-gray-50">
              <Image src="/heart.png" alt="Like" width={16} height={16} />
              {post.reactions.like}
            </span>
            <span className="flex items-center gap-1 text-gray-600 text-sm rounded-2xl px-2 py-1 bg-gray-50">
              <Image src="/comment.png" alt="Comment" width={16} height={16} />
              {post.reactions.comment}
            </span>
            <span className="flex items-center gap-1 text-gray-600 text-sm rounded-2xl px-2 py-1 bg-gray-50">
              <Image src="/share.png" alt="Share" width={16} height={16} />
              {post.reactions.share}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TrendingPosts;