import React from "react";
import styled from "styled-components";
import icon from "./assets/icons8-magic-24.png";
import UserLocation from "./user_location";
import { supabase } from "./supabase_client";
import ConfirmedPage from "./ConfirmedPage";

function UserInformation() {
  const [userRole, setUserRole] = React.useState(null);
  const [step, setStep] = React.useState(1);
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const updateUseState = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContinue = (e) => {
    e.preventDefault();

    if (userRole) {
      setStep(2);
    } else {
      alert(
        "Please select whether you are a Traveler or a Creator to proceed.",
      );
    }
  };

  const handleFinalSubmit = async ({ country, city }) => {
    const { error } = await supabase.from("users").insert({
      first_name: formData.firstName.trim(),
      last_name: formData.lastName.trim(),
      email: formData.email.trim().toLowerCase(),
      user_type: userRole,
      country: country.trim(),
      city: city.trim(),
    });

    if (error) {
      if (error.code === "23505") {
        alert("That email is already on the waitlist.");
      } else {
        alert(error.message || "Something went wrong.");
      }
      throw error;
    } else {
      // FIX: Update the state to move to the confirmation screen
      setStep(3);
    }
  };

  if (step === 2) {
    return (
      <WaitListComponent id="signup-form">
        <WaitListSection>
          <UserLocation
            userType={userRole}
            onBack={() => setStep(1)}
            onSubmit={handleFinalSubmit}
          />
        </WaitListSection>
      </WaitListComponent>
    );
  }

  if (step === 3) {
    return (
      <WaitListComponent id="signup-form">
        <WaitListSection>
          <ConfirmedPage userType={userRole} />
        </WaitListSection>
      </WaitListComponent>
    );
  }

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
                <span className="step-number">3</span> CONFIRMED
              </Step>
            </StepsContainer>
          </BlueHeader>

          <UserInputSection as="form" onSubmit={handleContinue}>
            <NameSection>
              <InputWrapper>
                <label>First Name</label>
                <input
                  name="firstName"
                  placeholder="James"
                  value={formData.firstName}
                  onChange={updateUseState}
                  required
                />
              </InputWrapper>

              <InputWrapper>
                <label>Last Name</label>
                <input
                  name="lastName"
                  placeholder="Adam"
                  value={formData.lastName}
                  onChange={updateUseState}
                  required
                />
              </InputWrapper>
            </NameSection>

            <EmailSection>
              <InputWrapper>
                <label> Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="you@email.com"
                  onChange={updateUseState}
                  required
                ></input>
              </InputWrapper>
            </EmailSection>

            <RoleSelection>
              <OptionCard
                selected={userRole === "traveler"}
                onClick={() => setUserRole("traveler")}
              >
                <span className="icon">🌎</span>
                <h4>Traveler</h4>
                <p>I want to find unique, local itineraries.</p>
              </OptionCard>

              <OptionCard
                selected={userRole === "creator"}
                onClick={() => setUserRole("creator")}
              >
                <span className="icon">✍️</span>
                <h4>Creator</h4>
                <p>I want to share my local knowledge.</p>
              </OptionCard>
            </RoleSelection>

            <ContinueButtonSection>
              <button type="submit">Continue &rarr;</button>
            </ContinueButtonSection>

            <SpanText>
              No spam. We'll only email when your local is matched.
            </SpanText>
          </UserInputSection>
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
  margin-bottom: 20px;
  font-size: 35px;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif;
`;

const WaitListForm = styled.div`
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
`;

const LimitedAccessText = styled.div`
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
`;

const UserInputSection = styled.form`
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

const NameSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  width: 100%;
  text-align: left;

  @media (max-width: 480px) {
    flex-direction: row;
    gap: 20px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
  width: 100%;

  label {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #6b7280;
    font-weight: 700;
  }

  input {
    width: 100%;
    box-sizing: border-box;
    border-radius: 12px;
    border: 1px solid #e5e7eb;
    padding: 12px 16px;
    height: 48px;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    background: #ffffff;

    &:focus {
      outline: none;
      border-color: #2b48e6;
      box-shadow: 0 0 0 4px rgba(43, 72, 230, 0.1); /* Soft glow effect */
    }

    &::placeholder {
      color: #9ca3af;
    }
  }
`;

const EmailSection = styled.div`
  flex: 1;
  width: 100%;
  margin-top: 20px;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif;
  margin-bottom: 20px;

  label {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #6b7280;
    text-align: left;
  }

  input {
    width: 100%;
    box-sizing: border-box;
    border-radius: 12px;
    border: 1px solid #e5e7eb;
    padding: 12px 16px;
    height: 48px;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    background: #ffffff;

    &:focus {
      outline: none;
      border-color: #2b48e6;
      box-shadow: 0 0 0 4px rgba(43, 72, 230, 0.1); /* Soft glow effect */
    }

    &::placeholder {
      color: #9ca3af;
    }
  }
`;

const ContinueButtonSection = styled.div`
  button {
    display: inline-flex;
    padding-left: 2rem;
    padding-right: 2rem;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.375rem;
    width: 100%;
    height: 3rem;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 500;

    background: #2e58ee;
    color: white;
    border: none;
    margin-bottom: 20px;
  }
`;

const SpanText = styled.div`
  font-size: 12px;
  color: #6b7280;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif;
`;

const RoleSelection = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  margin-top: 24px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const OptionCard = styled.div`
  flex: 1;
  padding: 20px;
  border: 2px solid ${(props) => (props.selected ? "#2b48e6" : "#e5e7eb")};
  background: ${(props) =>
    props.selected ? "rgba(43, 72, 230, 0.05)" : "white"};
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  &:hover {
    border-color: #2b48e6;
    transform: translateY(-2px);
  }

  .icon {
    font-size: 24px;
  }

  h4 {
    margin: 0;
    font-size: 16px;
    font-weight: 700;
    color: ${(props) => (props.selected ? "#2b48e6" : "#1f2937")};
  }

  p {
    margin: 0;
    font-size: 16px;
    color: #6b7280;
    line-height: 1.4;
  }
`;

export default UserInformation;
