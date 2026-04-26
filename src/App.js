import HomePage from "./home_page";
import styled from "styled-components";
import Waitlist from "./waitlist";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <HomePage />
        <Waitlist />
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
