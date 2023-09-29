import { useEffect, useState } from 'react';

const TechNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=c2faa8214b40467bb22fb6e4411bd3d6'
        );
        const data = await response.json();
        setNews(data.articles || []); // Initialize with an empty array if data.articles is undefined
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="p-4 bg-slate-500 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">News Blog</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {news.map((article, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-auto mb-2 rounded"
              />
            )}
            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
            <p className="text-gray-600">{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-blue-500 hover:underline"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechNews;
