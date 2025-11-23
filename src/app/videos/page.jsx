"use client";
import React from 'react';

const videos = [
  {
    id: 1,
    title: 'Banarasi Bridal Saree Lookbook',
    creator: 'Fashion Blogger',
    thumbnail:
      'https://images.pexels.com/photos/34793684/pexels-photo-34793684.jpeg',
    url: 'https://youtu.be/RRKppnCFbNc?si=4V3a6669SXPPij7b',
    duration: '4:32',
  },
  {
    id: 2,
    title: 'Kanjivaram Wedding Collection Try-On',
    creator: 'Style Influencer',
    thumbnail:
      'https://images.pexels.com/photos/28943570/pexels-photo-28943570.jpeg',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    duration: '6:18',
  },
  {
    id: 3,
    title: 'Everyday Georgette Saree Styling Tips',
    creator: 'Daily Vlogger',
    thumbnail:
      'https://images.pexels.com/photos/2100868/pexels-photo-2100868.jpeg',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    duration: '5:04',
  },
  {
    id: 4,
    title: 'Festive Party Saree Look Ideas',
    creator: 'Makeup & Fashion',
    thumbnail:
      'https://images.pexels.com/photos/1193942/pexels-photo-1193942.jpeg',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    duration: '7:45',
  },
    {
    id: 5,
    title: 'Festive Party Saree Look Ideas',
    creator: 'Makeup & Fashion',
    thumbnail:
      'https://images.pexels.com/photos/2531734/pexels-photo-2531734.jpeg',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    duration: '7:45',
  },
    {
    id: 6,
    title: 'Festive Party Saree Look Ideas',
    creator: 'Makeup & Fashion',
    thumbnail:
      'https://images.pexels.com/photos/28943468/pexels-photo-28943468.jpeg',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    duration: '7:45',
  },
];

const Videos = () => {
  const handleOpenVideo = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-neutral-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-primary uppercase mb-2">
              Video Stories
            </p>
            <h1 className="text-3xl md:text-4xl font-playfair font-semibold text-neutral-900 mb-3">
              Saree Styling & Shopping Videos
            </h1>
            <p className="text-sm md:text-base text-neutral-600 max-w-2xl">
              Discover real looks, draping styles, and shopping guides from bloggers and our
              in-house team. New videos are added regularly to help you choose your next favourite
              saree with confidence.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-xs md:text-sm text-neutral-500">
            <span className="px-3 py-1 rounded-full bg-white border border-neutral-200">
              Daily style inspiration
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-neutral-200">
              Wedding & festive looks
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-neutral-200">
              Draping & styling tips
            </span>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <button
              key={video.id}
              onClick={() => handleOpenVideo(video.url)}
              className="group text-left bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-neutral-100 hover:border-primary/40 transition-all cursor-pointer flex flex-col h-full"
            >
              <div className="relative overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-52 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-white/95 text-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 ml-0.5"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 px-2.5 py-1 text-xs font-semibold tracking-wide bg-black/70 text-white rounded-full">
                  {video.duration}
                </div>
              </div>

              <div className="flex-1 flex flex-col p-4">
                <h2 className="text-sm md:text-base font-semibold text-neutral-900 mb-1.5 line-clamp-2 group-hover:text-primary">
                  {video.title}
                </h2>
                <p className="text-xs text-neutral-500 mb-3">{video.creator}</p>
                <div className="mt-auto flex items-center justify-between text-xs text-neutral-500">
                  <span className="inline-flex items-center gap-1 group-hover:text-primary">
                    Watch on YouTube
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-3.5 h-3.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 6.75L21 3m0 0h-5.25M21 3v5.25M6.75 6.75L3 3m0 0h5.25M3 3v5.25m0 9.75L3 21m0 0h5.25M3 21v-5.25m9.75 0L21 21m0 0v-5.25M21 21h-5.25"
                      />
                    </svg>
                  </span>
                  <span className="px-2 py-1 rounded-full bg-primary/5 text-primary font-medium">
                    New
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-neutral-500">
          <p>
            Planning to upload your own product videos daily? This section is structured to easily
            handle dozens of videos while staying clean and easy to browse.
          </p>
          <p>
            For more advanced features later, you can add filters like Bridal, Office Wear, Festive and
            more on top of this grid.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Videos;
