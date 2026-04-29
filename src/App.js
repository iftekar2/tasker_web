import HomePage from "./home_page";
import styled from "styled-components";
import UserInformation from "./user_information";
import AppDetails from "./app_details";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <HomePage />
        <UserInformation />
        <AppDetails />
      </MainLayout>
    </div>
  );
}

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
