import React from "react";
import styled from "styled-components";

function HomePage() {
  const scrollToWaitList = () => {
    const element = document.getElementById("signup-form");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <HomePageComponent>
      <HomePageInfo>
        <h1>
          Travel like a <em>local</em>, not a tourist.
        </h1>

        <p className="description">
          Get a custom, A-to-Z itinerary designed by verified residents. Skip
          the traps, find the soul of the city.
        </p>

        <div className="social-proof">
          <div className="avatar-stack">
            <div
              className="avatar"
              style={{ background: "oklch(0.65 0.18 230)" }}
            />
            <div
              className="avatar"
              style={{ background: "oklch(0.70 0.18 260)" }}
            />
            <div
              className="avatar"
              style={{ background: "oklch(0.75 0.18 290)" }}
            />
          </div>

          <p className="">
            <strong>2,400+ travelers waiting</strong>
          </p>
        </div>

        <div className="cta-section">
          <button className="join-button" onClick={scrollToWaitList}>
            Scroll to Join <span className="arrow">&darr;</span>
          </button>
        </div>
      </HomePageInfo>
    </HomePageComponent>
  );
}

const HomePageComponent = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  max-width: 1280px;
  margin: 0 auto;
  color: black;
`;

const HomePageInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 100vh;

  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif;

  .status-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    border: 1px solid #e5e7eb;
    border-radius: 9999px;
    font-size: 13px;
    color: #5c646f;
    margin-bottom: 24px;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(4px);
  }

  h1 {
    font-size: clamp(2.25rem, 11vw, 4.5rem);
    font-weight: 600;
    line-height: 1.05;
    letter-spacing: -0.025em;
    color: black;
    margin: 0;
    text-wrap: balance;
    text-align: center;
  }

  em {
    font-family: Georgia, serif;
    font-style: italic;
    color: #2b48e6;
  }

  .description {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 24px;
    font-size: clamp(1rem, 4.2vw, 1.25rem);
    line-height: 1.6;
    color: #5c646f;
    font-weight: 500;
    max-width: 680px;
  }

  .cta-section {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 32px;
    justify-content: center;
  }

  .join-button {
    background: #2b48e6;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: background 0.2s;
    width: 220px;
    height: 55px;

    &:hover {
      background: #1e36b3;
    }
  }

  .social-proof {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    color: black;

    strong {
      color: black;
      margin-left: 10px;
      font-size: 18px;
    }
  }

  .avatar-stack {
    display: flex;
    margin-right: -8px;
  }

  .avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid white;
    margin-left: -8px;
    &:first-child {
      margin-left: 0;
    }
  }
`;

export default HomePage;
