import { useState } from "react";
import { Container } from "./Join.styled";
import { Link, useNavigate } from "react-router-dom";
const Join = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  return (
    <Container>
      <div className="content">
        <h1>CHAT LOGIN</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="ENTER YOUR NAME"
          id="joinInput"
          onKeyPress={(event) =>
            event.key === "Enter" ? navigate("/chat/" + name) : null
          }
        />
        {name === "" ? null : (
          <div>
            <Link to={`/chat/${name}`}>Login In</Link>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Join;
