import React from "react";
import styled from "styled-components";
import icon from "./assets/icons8-magic-24.png";

function WaitList() {
  return (
    <WaitListComponent id="signup-form">
      <WaitListSection>
        <WaitListTitle>Join the waitlist</WaitListTitle>

        <WaitListInfo>Two steps. One unforgettable trip.</WaitListInfo>

        <WaitListForm>
          <BlueHeader>
            <LimitedAccessText>
              <img src={icon} alt="icon" /> Limited early access
            </LimitedAccessText>

            <FormTitle>Let's get acquainted.</FormTitle>

            <StepsContainer>
              <Step className="active">
                <span className="step-number">1</span> · DETAILS
              </Step>
              <Step>
                <span className="step-number">2</span> · TRAVEL
              </Step>
              <Step>
                <span className="check-icon">✓</span> CONFIRMED
              </Step>
            </StepsContainer>
          </BlueHeader>

          <UserInputSection>{/* Your inputs go here */}</UserInputSection>
        </WaitListForm>
      </WaitListSection>
    </WaitListComponent>
  );
}

const WaitListComponent = styled.div`
  min-height: 100vh;
  width: 100%;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 24px;
`;

const WaitListSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const WaitListTitle = styled.div`
  font-size: 25px;
  letter-spacing: 2px;
  color: #2b48e6;
`;

const WaitListInfo = styled.h3`
  margin-top: 20px;
  font-size: 35px;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif;
`;

const WaitListForm = styled.div`
  width: 95%;
  max-width: 600px;
  position: relative;
  margin-top: 40px;
  /* Remove the background from here, we will move it to a 'Header' div */
`;

const BlueHeader = styled.div`
  background: #2e58ee;
  border-radius: 24px 24px 0 0; /* Only round the top corners */
  padding: 40px 40px 60px 40px; /* Extra bottom padding for the overlap */

  background-image:
    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;

  display: flex;
  flex-direction: column;
  align-items: center; /* Centers the LimitedAccess and Title */
`;

const LimitedAccessText = styled.div`
  /* Change display to inline-flex */
  display: inline-flex;
  align-items: center;
  gap: 5px;

  background: rgba(255, 255, 255, 0.2);
  padding: 6px 12px;
  border-radius: 99px;
  font-size: 12px;
  color: white;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 20px;
  width: max-content;

  img {
    height: 20px;
    width: 20px;
  }
`;

const FormTitle = styled.h2`
  color: white;
  font-size: 32px;
  margin: 0;
  font-weight: 700;
  letter-spacing: -0.02em;
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 25px;
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  color: white;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  opacity: 0.5;

  &.active {
    opacity: 1;
  }

  .step-number {
    font-variant-numeric: tabular-nums;
  }

  .check-icon {
    font-size: 14px;
    font-weight: 900;
  }
`;

const UserInputSection = styled.div`
  background: white;

  /* 1. Change width to 100% so it fits its parent perfectly */
  width: 100%;

  /* 2. Use box-sizing to ensure padding doesn't push the width wider than 100% */
  box-sizing: border-box;

  padding: 40px;
  border-radius: 24px;
  margin-top: -40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;

  /* 3. On very small screens, reduce padding so the inputs have more room */
  @media (max-width: 480px) {
    padding: 24px 16px;
    border-radius: 16px;
  }
`;

export default WaitList;
