import React from "react";
import styled from "styled-components";

function UserLocation({ userType, onBack }) {
  const isTraveler = userType === "traveler";
  const [formData, setFormData] = React.useState({
    country: "",
    city: "",
  });

  const updateUseState = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContinue = (e) => {
    e.preventDefault();
  };

  return (
    <UserLocationComponent>
      <BlueHeader>
        <Badge>STEP 2 · LOCATION</Badge>

        <FormTitle>
          {isTraveler ? "Where to next?" : "Share your world."}
        </FormTitle>

        <FormSubtitle>
          {isTraveler
            ? "Tell us where you're dreaming of going."
            : "Tell us which city you know like the back of your hand."}
        </FormSubtitle>

        <StepsContainer>
          <Step>✓ DETAILS</Step>
          <Step className="active">2 · TRAVEL</Step>
          <Step>CONFIRMED</Step>
        </StepsContainer>
      </BlueHeader>

      <UserInputSection as="form" onSubmit={handleContinue}>
        <InputWrapper>
          <label>{isTraveler ? "DESTINATION COUNTRY" : "YOUR COUNTRY"}</label>
          <input
            name="country"
            placeholder="e.g. Italy"
            value={formData.country}
            onChange={updateUseState}
            required
          />
        </InputWrapper>

        <InputWrapper>
          <label>{isTraveler ? "WHICH CITY?" : "CITY OF EXPERTISE"}</label>
          <input
            name="city"
            placeholder="e.g. Florence"
            value={formData.city}
            onChange={updateUseState}
            required
          />
        </InputWrapper>

        <ButtonGroup>
          <BackButton type="button" onClick={onBack}>
            Back
          </BackButton>
          <SubmitButton type="submit">Join the Waitlist</SubmitButton>
        </ButtonGroup>

        <SpanText>
          No spam. We'll only email when your local is matched.
        </SpanText>
      </UserInputSection>
    </UserLocationComponent>
  );
}

const UserLocationComponent = styled.div`
  width: 95%;
  max-width: 600px;
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

const Badge = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding: 6px 12px;
  border-radius: 99px;
  color: white;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1px;
  margin-bottom: 10px;
`;

const FormTitle = styled.h2`
  color: white;
  font-size: 28px;
  margin: 0;
  font-weight: 700;
`;

const FormSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
  margin-top: 8px;
`;

const UserInputSection = styled.div`
  background: white;
  width: 100%;
  box-sizing: border-box;
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 24px;
  margin-top: -40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;

  @media (max-width: 480px) {
    padding: 24px 16px;
    border-radius: 16px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: left;

  label {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #6b7280;
    font-weight: 700;
    font-family:
      -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
      sans-serif;
  }

  input {
    padding: 14px;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    font-size: 16px;
    margin-bottom: 20px;

    &:focus {
      outline: none;
      border-color: #2e58ee;
    }
  }
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

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
  margin-bottom: 20px;
  box-sizing: border-box;
`;

const BackButton = styled.button`
  flex: 1;
  background: white;
  color: #2e58ee;
  border: 1px solid #e5e7eb;
  padding: 16px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f9fafb;
  }
`;

const SubmitButton = styled.button`
  flex: 1;
  background: #2e58ee;
  color: white;
  border: none;
  padding: 16px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

const SpanText = styled.div`
  font-size: 12px;
  color: #6b7280;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif;
`;

export default UserLocation;
