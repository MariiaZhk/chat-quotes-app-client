import ChatArea from "../../components/ChatArea/ChatArea";
import Sidebar from "../../components/Sidebar/Sidebar";
import { StyledMain, StyledWrapper } from "./HomePage.styled";

function HomePage() {
  return (
    <StyledMain>
      <StyledWrapper>
        <Sidebar />
        <ChatArea />
      </StyledWrapper>
    </StyledMain>
  );
}

export default HomePage;
