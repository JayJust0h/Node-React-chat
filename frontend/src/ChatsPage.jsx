import {MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const ChatsProps = useMultiChatLogic(
        '665f6dbd-795a-432f-813c-97b0e403d43f',
        props.user.username,
        props.user.secret,
    );
  return (
    <div style ={{ height: '100vh' }}>
        <MultiChatSocket {...ChatsProps} />
        <MultiChatWindow {...ChatsProps} style = {{height: '100%'}} />
    </div>
  );
}

// Export ChatsPage component as the default export
export default ChatsPage;