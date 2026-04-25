import React from "react";
import styled from "styled-components";
import homePageImage from "./assets/home_page_image.jpeg";

function HomePage() {
  return (
    <HomePageComponent>
      <HomePageInfo>
        <h1>
          Travel like a <em>local</em>, not a tourist.
        </h1>

        <p>
          Get a custom, A-to-Z itinerary designed by verified residents. Skip
          the traps, find the soul of the city.
        </p>

        <div className="cta-section">
          <button className="join-button">
            Scroll to Join <span className="arrow">&darr;</span>
          </button>

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
            <p>
              <strong>2,400+</strong> <span>travelers waiting</span>
            </p>
          </div>
        </div>
      </HomePageInfo>

      <HomePageImage>
        <img src={homePageImage} alt="Travel Itinerary" />
      </HomePageImage>
    </HomePageComponent>
  );
}

const HomePageComponent = styled.section`
  display: flex;
  flex-direction: column; /* Stack vertically by default (mobile first) */
  align-items: center;
  gap: 32px;
  padding: 40px 24px;
  max-width: 1280px;
  margin: 0 auto;

  /* Desktop View */
  @media (min-width: 1024px) {
    flex-direction: row; /* Side-by-side on large screens */
    gap: 64px;
    padding: 80px 40px;
    height: 100vh; /* Optional: Center it vertically on the screen */
  }
`;

const HomePageInfo = styled.div`
  flex: 1;
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
    font-size: 72px;
    font-weight: 600;
    line-height: 1.05;
    letter-spacing: -0.025em;
    color: #111827;
    margin: 0;
    text-wrap: balance;
  }

  em {
    font-family: Georgia, serif;
    font-style: italic;
    color: #2b48e6;
  }

  .description {
    margin-top: 24px;
    font-size: 18px;
    line-height: 1.6;
    color: #5c646f;
    max-width: 480px;
  }

  .cta-section {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 32px;
  }

  .join-button {
    background: #2b48e6;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: background 0.2s;

    &:hover {
      background: #1e36b3;
    }
  }

  .social-proof {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    color: #5c646f;

    strong {
      color: #111827;
    }
  }

  .avatar-stack {
    display: flex;
    margin-right: -8px;
  }

  .avatar {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 2px solid white;
    margin-left: -8px;
    &:first-child {
      margin-left: 0;
    }
  }
`;

const HomePageImage = styled.div`
  flex: 1;
  width: 100%; /* Take full width on mobile */
  display: flex;
  justify-content: center;

  img {
    height: auto;
    width: 100%;
    max-width: 500px; /* Prevent it from getting too huge on massive monitors */
    border-radius: 16px;

    @media (min-width: 1024px) {
      max-width: 566px; /* Match the exact width from your original code */
      border-radius: 24px;
    }
  }
`;
export default HomePage;
