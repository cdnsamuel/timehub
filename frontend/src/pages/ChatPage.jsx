import ConversationList from "../components/ConversationList";
import SideBar from "../components/SideBar";

const ChatPage = () => {
  return (
    <div className="lg:flex">
      <SideBar />
      <div className="w-full lg:h-[90vh]">
        <ConversationList />
      </div>
    </div>
  );
};

export default ChatPage;
