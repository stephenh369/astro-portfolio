import { useState, useRef } from "react";
import type { FC } from "react";
import type Article from "../interfaces/article";
import ArticleCard from "./ArticleCard.tsx";
import "./Pagination.css";

interface PaginationProps {
  articles: Article[];
  itemsPerPage: number;
}

const Pagination: FC<PaginationProps> = ({ articles, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  let currentPageRef = useRef(null);
  const totalPages = Math.ceil(articles.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (currentPage > totalPages) {
      currentPageRef.current.style.animation = "prevPage .5s forwards";
    } else {
      currentPageRef.current.style.animation = "nextPage .5s forwards";
    }
    setCurrentPage(page);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 p-8 mb-8 bg-container/40 backdrop-filter backdrop-blur-sm shadow-primary rounded-lg">
        <h4 className="text-xl">
          Page <span className="text-green-500">{currentPage}</span> of{" "}
          <span className="text-green-500">{totalPages}</span>
        </h4>
        <div className="flex gap-4">
          <span
            className="cursor-pointer"
            tabIndex={0}
            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
          >
            &#60; Prev
          </span>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNum) => (
              <button key={pageNum} onClick={() => handlePageChange(pageNum)}>
                <span
                  className={pageNum === currentPage ? "text-green-500" : ""}
                >
                  {pageNum}
                </span>
              </button>
            )
          )}
          <span
            className="cursor-pointer"
            tabIndex={0}
            onClick={() =>
              currentPage < totalPages && handlePageChange(currentPage + 1)
            }
          >
            Next &#62;
          </span>
        </div>
      </div>
      <div
        className="mx-auto lg:max-w-xl"
        ref={currentPageRef}
        onAnimationEnd={() => {
          if (currentPageRef.current) {
            currentPageRef.current.style.animation = "";
          }
        }}
      >
        <ul
          role="list"
          className="flex flex-col justify-center gap-4 container max-h"
        >
          {articles
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((article, index) => {
              return (
                <ArticleCard
                  href={`blog/${article.attributes.slug}`}
                  title={article.attributes.title}
                  titleClass="text-center"
                  description={article.attributes.description}
                  descriptionClass="text-center"
                  key={index}
                />
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default Pagination;
