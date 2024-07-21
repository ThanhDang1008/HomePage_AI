import React from "react";
import "./Cardtrial.scss";

const Cardtrial = () => {
  return (
    <div className="card_trial-container">
      <div className="card_trial-full">
        <div className="card_trial-list">
          <div className="card_trial-name">Try ChatAI free today</div>
          <div className="card_trial-title">
            Build a website and try our AI tools, no credit card required.
          </div>
          <input
            className="card_trial-button"
            type="button"
            value="Generate your website"
          />
          <div className="card_trial-note">No credit card required.</div>
        </div>

        <img
          src="https://cdn.prod.website-files.com/632df91dd7c99c0ac992c47b/6560d37e958bacf5defa78f4_cta-logo-standalone-opt.png"
          alt=""
          className="card_trial-img"
        />
      </div>
    </div>
  );
};

export default Cardtrial;
