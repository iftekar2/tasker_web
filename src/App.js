import HomePage from "./home_page";
import styled from "styled-components";
import UserInformation from "./user_information";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <HomePage />
        <UserInformation />
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
