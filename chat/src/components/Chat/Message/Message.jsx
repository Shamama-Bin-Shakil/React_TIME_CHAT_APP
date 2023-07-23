import { Container } from "./Message.styled";
const Message = ({ user, message, classs }) => {
  if (user) {
    return (
      <Container>
        <div className={`messageBox ${classs}`}>{`${user}: ${message}`}</div>
      </Container>
    );
  } else {
    return (
      <Container>
        <div className={`messageBox ${classs}`}>{`You: ${message}`}</div>
      </Container>
    );
  }
};

export default Message;
