import React from 'react';

type WorkCardProps = {
  title: string;
  videoUrl: string;
  linkUrl: string; // Add the linkUrl prop
};

export default function WorkCard({ title, videoUrl, linkUrl }: WorkCardProps) {
  return (
    <div className="border-2 border-black overflow-hidden shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
      <a href={linkUrl} target="_blank" rel="noopener noreferrer"> {/* Wrap the video in a link */}
        <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
          <video
            className="absolute top-0 left-0 w-full h-full"
            src={videoUrl}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </a>
    </div>
  );
}
