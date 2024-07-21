import React from "react";
import "./CardLists.scss";

const Cardlist = () => {
  return (
    <>
      <div className="container-card">
        <div className="container_title">
          Join millions of business owners who started with Durable
        </div>
        <div className="card-list">
          <div className="card-item">
            <img
              src="https://cdn.britannica.com/41/218341-050-51D8903F/American-actor-John-Krasinski-2020.jpg"
              className="user-img"
            />
            <h1 className="user-name">Hassan Mehmet</h1>
            <h3 className="user-profession">Digital Marketing</h3>
            <p className="user-comment">
              "I was on TikTok and saw this video about an AI website builder
              called Durable.
            </p>
          </div>

          <div className="card-item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3e/John_Travolta_Cannes_2018_%28cropped%29.jpg"
              className="user-img"
            />
            <h1 className="user-name">Hassan Mehmet</h1>
            <h3 className="user-profession">Software Engineer</h3>
            <p className="user-comment">
              "Couldn’t be happier with the service and highly recommend
              Durable"
            </p>
          </div>

          <div className="card-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd2EEnxMIvdkGuFZf7CYvlmRWr2T-svjVNEg&s"
              className="user-img"
            />
            <h1 className="user-name">Hassan Mehmet</h1>
            <h3 className="user-profession">FullStack Devloper</h3>
            <p className="user-comment">
              "Your website builder gave me the perfect start, perfect pictures,
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardlist;
