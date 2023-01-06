import { Container, Row, Col } from "react-bootstrap";
import Footer from "./components/footer";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <>
      <main>
        <Container>
          <h1>List of GitHub Users</h1>
          <HomeScreen />
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
