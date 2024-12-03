import ChatArea from "../../components/ChatArea/ChatArea";
import Sidebar from "../../components/Sidebar/Sidebar";
import { StyledMain } from "./HomePage.styled";

function HomePage() {
  return (
    <StyledMain>
      <Sidebar />
      <ChatArea />
    </StyledMain>
  );
}

export default HomePage;
