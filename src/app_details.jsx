import React from "react";
import styled from "styled-components";
import { MapPin, Coffee, MessageCircle } from "lucide-react";

function AppDetails() {
  return (
    <AppDetailsContainer>
      <PageTitle>What you Get</PageTitle>

      <PageSubtitle>A trip designed by someone who lives there.</PageSubtitle>

      <PageDescription>
        Forget endless tabs and review scrolling. Your local hands you the kind
        of itinerary friends used to share on napkins — only better.
      </PageDescription>

      <ReasonToUseApp>
        <li>
          <div className="location-icon">
            <MapPin className="icon" />
          </div>

          <div>
            <h3>A day-by-day plan, not a list</h3>
            <p>
              Mornings, afternoons, evenings — with walking routes that flow
              naturally between stops.
            </p>
          </div>
        </li>

        <li>
          <div className="coffee-icon">
            <Coffee className="icon" />
          </div>

          <div>
            <h3>The neighborhood spots locals actually go to</h3>
            <p>
              Family-run bistros, weekend markets, the bar your local goes to
              after work.
            </p>
          </div>
        </li>

        <li>
          <div className="message-icon">
            <MessageCircle className="icon" />
          </div>

          <div>
            <h3>A real human you can text mid-trip</h3>
            <p>
              Restaurant closed unexpectedly? Weather changed plans? Your local
              is one message away.
            </p>
          </div>
        </li>
      </ReasonToUseApp>
    </AppDetailsContainer>
  );
}

const AppDetailsContainer = styled.div`
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif;
  min-height: 100vh;
  width: 100%;
  position: relative;
  padding: 24px;
  margin-top: 40px;
`;

const PageTitle = styled.p`
  color: #2e58ee;
  font-size: 16px;
  font-weight: 550;
  text-transform: uppercase;
  margin: 0;
`;

const PageSubtitle = styled.h2`
  margin-top: 12px;
  font-size: 30px;
  line-height: 36px;
  font-wight: 600;
  letter-spacing: -0.4;
  margin-bottom: 0;
`;

const PageDescription = styled.p`
  color: grey;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
`;

const ReasonToUseApp = styled.ul`
  margin-top: 32px;
  padding: 0px;

  li {
    display: flex;
    gap: 16px;
    margin-bottom: 20px;
  }

  .location-icon {
    background: #e6eaf5;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 47px;
    border-radius: 10px;
  }

  .coffee-icon {
    background: #e6eaf5;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    border-radius: 10px;
  }

  .message-icon {
    background: #e6eaf5;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 47px;
    border-radius: 10px;
  }

  h3 {
    font-weight: 600;
    letter-spacing: -0.4px;
    margin: 0;
  }

  p {
    margin-top: 4px;
    font-size: 14px;
    line-height: 20px;
    color: grey;
  }

  .icon {
    color: #2b48e6;
  }
`;

export default AppDetails;
