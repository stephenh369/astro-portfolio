import React from 'react';
import './ArticleCard.css';

interface Props {
  title: string;
  description?: string;
  href: string;
  thumbnailUrl?: string;
  titleClass?: string;
  descriptionClass?: string;
  mostRecentClass?: string;
}

const ArticleCard: React.FC<Props> = ({
  title,
  description,
  href,
  thumbnailUrl,
  titleClass,
  descriptionClass,
  mostRecentClass,
}) => (
  <div
    className={`${mostRecentClass} flex container bg-container/40 backdrop-filter backdrop-blur-sm shadow-primary rounded-lg items-center justify-center`}
  >
    <a href={href} className="flex w-full h-full justify-center items-center">
      <div className="flex flex-col p-8">
        <h2 className={`pb-8 text-green-500 font-semibold ${titleClass}`}>
          {title}
        </h2>
        {
          thumbnailUrl && (
            <img
              src={thumbnailUrl}
              alt="article thumbnail"
              className="object-cover w-full h-full max-w-lg pb-8 mx-auto"
            />
          )
        }
        <p className={`${descriptionClass} mt-2 mb-0 hover:focus:active:text-black`}>
          {description}
        </p>
      </div>
    </a>
  </div>
);

export default ArticleCard;