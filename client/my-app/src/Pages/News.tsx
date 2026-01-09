import React from "react";
import NewsData from "../News";
import "../styles/News.css";

export const News = () => {
  const news = NewsData.slice(0, 2);

  return (
    <>
      <section className="News">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="news_heading">
                <div className="news_wrap">
                  <div className="heading">News and Blog</div>
                  <div className="sub_heading">
                    Metus faucibus sed turpis lectus feugiat tincidunt. Rhoncus
                    sed tristique in dolor
                  </div>
                </div>
                <div className="link">
                  <a href="">View all</a>
                </div>
              </div>
            </div>
            {news.length > 0 ? (
              <>
                {" "}
                {NewsData.map((items) => (
                  <div className="col-lg-6">
                    <div className="news_wrapper" key={items.id}>
                      <div className="news_img">
                        <img src={items.img} />
                      </div>
                      <div className="news_content">
                        <div className="date">{items.date}</div>
                        <div className="news_details">{items.detail}</div>
                        <a href="">
                          Read more <i className="ri-arrow-right-line"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <h1>Noting to show </h1>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
