

const Message = () => {
  return (
    <div className="chat chat-end">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img alt="Chat bubble" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"></img>
            </div>

        </div>
      <div className={`chat-bubble chat-bubble-primary text-white`}>Hi Himan</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:46</div>
    </div>
  );
}

export default Message;
