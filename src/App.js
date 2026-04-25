import HomePage from "./home_page";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <HomePage />
      </MainLayout>
    </div>
  );
}

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  //padding: 20px;
  min-height: 100vh;
`;

export default App;
