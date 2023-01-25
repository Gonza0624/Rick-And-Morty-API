import React from "react";
import "./loader.css";

type CardProps = {
  loading: any;
};

const Loader: React.FC<CardProps> = ({ loading }) => {
  return loading ? (
    <main>
      <section className="section-loader">
        <div className="loader loader-1">
          <div className="loader-outter"></div>
          <div className="loader-inner"></div>
        </div>
      </section>
    </main>
  ) : null;
};

export default Loader;
