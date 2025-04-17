"use client"
import React from "react";
import CounterNumber from "../elements/CounterNumber";

export default function Counter1({ counterData }) {
  return (
    <div className="row">
      {counterData.map((item, index) => (
        <div
          key={index}
          className="col-lg-6 col-md-6 wow fadeInUp"
          data-wow-delay={item.delay}
        >
          <div className="counter-items">
            <div className="content">
              <div className="icon">
                <img src={item.icon} alt="img" />
              </div>
              <h2>
                <span className="count">
                  <CounterNumber count={item.count} />
                </span>
                {item.suffix}
              </h2>
              <p>{item.label}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}