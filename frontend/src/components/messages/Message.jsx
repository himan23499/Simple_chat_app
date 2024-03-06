import { extractTime } from "../../../../backend/utils/extractTime";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";


const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe?'chat-end':'chat-start';
  const formattedTime = extractTime(message.createdAt);
  const profilePic = fromMe?authUser.profilePic:selectedConversation?.profilePic;
  const bubbleBgColor = fromMe?'chat-bubble-primary':"";
  const shakeClass = message.shouldShake?"shake":"";
  return (
    <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img alt="Chat bubble" src={profilePic}></img>
            </div>

        </div>
      <div className={`chat-bubble ${bubbleBgColor} ${shakeClass} text-white`}>{message.message}</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formattedTime}</div>
    </div>
  );
}

export default Message;
