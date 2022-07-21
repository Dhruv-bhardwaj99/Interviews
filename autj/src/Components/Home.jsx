import { useNavigate } from "react-router";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Login } from "./Authentication/Login";



export const Home = () => {
//   const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Login
        </Button>

        <Login
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    </div>
  );
};
