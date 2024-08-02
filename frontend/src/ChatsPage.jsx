import {MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const ChatsProps = useMultiChatLogic(
        'b4871e1a-92a4-42f1-872d-97bdb4491e05',
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

export default ChatsPage;