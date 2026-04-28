import React from "react";
import styled from "styled-components";

const ConfirmedPage = ({ userType }) => {
  const isTraveler = userType === "traveler";

  return (
    <ConfirmedContainer>
      <BlueHeader>
        <CheckCircle>
          <span className="check">✓</span>
        </CheckCircle>
        <Badge>SUCCESS · YOU'RE IN</Badge>
        <FormTitle>Welcome to the inner circle.</FormTitle>
        <FormSubtitle>
          We've secured your spot on the <strong>Taskar</strong> waitlist.
        </FormSubtitle>

        <StepsContainer>
          <Step>✓ DETAILS</Step>
          <Step>✓ TRAVEL</Step>
          <Step className="active">✓ CONFIRMED</Step>
        </StepsContainer>
      </BlueHeader>

      <UserInputSection>
        <StatusSection>
          <StatusItem>
            <label>ROLE ASSIGNED</label>
            <p>{isTraveler ? "🌎 Traveler" : "✍️ Creator"}</p>
          </StatusItem>

          <StatusItem>
            <label>STATUS</label>
            <p className="active-status">Priority Access</p>
          </StatusItem>
        </StatusSection>

        {/* <Divider /> */}

        <InfoText>
          {isTraveler
            ? "Thank you for joining Tasker waitlist we are working on creating the app and finding locals to create trips for you. We will contact you as soon as Taskar is ready."
            : "Our team is reviewing local demand in your city. We'll reach out soon to verify your expertise."}
        </InfoText>
        <DoneButton onClick={() => window.location.reload()}>
          Return Home
        </DoneButton>
        {/* <SpanText>Check your email for a confirmation and next steps.</SpanText> */}
      </UserInputSection>
    </ConfirmedContainer>
  );
};

const ConfirmedContainer = styled.div`
  width: 95%;
  max-width: 550px;
  position: relative;
`;

const BlueHeader = styled.div`
  background: #2e58ee;
  border-radius: 24px 24px 0 0;
  padding: 40px 40px 60px 40px;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const CheckCircle = styled.div`
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  .check {
    color: #2e58ee;
    font-size: 24px;
    font-weight: 900;
  }
`;

const UserInputSection = styled.div`
  background: white;
  width: 100%;
  box-sizing: border-box;
  padding: 40px;
  border-radius: 24px;
  margin-top: -40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
  text-align: center;

  @media (max-width: 480px) {
    padding: 32px 20px;
    border-radius: 16px;
  }
`;

const StatusSection = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 24px;
  gap: 10px;
`;

const StatusItem = styled.div`
  flex: 1;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif;

  label {
    font-size: 10px;
    font-weight: 800;
    color: #9ca3af;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  p {
    font-size: 16px;
    font-weight: 700;
    margin-top: 10px;
    color: #1f2937;
  }

  .active-status {
    color: #10b981;
  }
`;

// const Divider = styled.div`
//   height: 1px;
//   background: #f3f4f6;
//   width: 100%;
//   margin-bottom: 24px;
// `;

const InfoText = styled.p`
  font-size: 15px;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 30px;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

const DoneButton = styled.button`
  width: 100%;
  background: #2e58ee;
  color: white;
  border: none;
  padding: 16px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition:
    transform 0.2s,
    opacity 0.2s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const Badge = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding: 6px 12px;
  border-radius: 99px;
  color: white;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1px;
  margin-bottom: 15px;
`;

const FormTitle = styled.h2`
  color: white;
  font-size: 28px;
  margin: 0;
  font-weight: 700;
  line-height: 1.2;
`;

const FormSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
  margin-top: 10px;
  strong {
    color: white;
  }
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 30px;
`;

const Step = styled.div`
  color: white;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  opacity: 0.5;

  &.active {
    opacity: 1;
  }
`;

// const SpanText = styled.div`
//   font-size: 12px;
//   color: #9ca3af;
//   font-family: -apple-system, sans-serif;
// `;

export default ConfirmedPage;
