import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Filter from "./components/Filter/Filter";
import Products from "./components/Products/Products";

function App() {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://assessment-edvora.herokuapp.com/`
      );
      setAllData(data);
    };

    fetchData();
  }, []);

  // =============================================fitlerItems============================================
  const [select, setSelect] = useState("");
  const onSelect = (e) => {
    setSelect(e.target.value);
  };

  const filteredCatItems = allData.filter((expenses) => {
    return select === ""
      ? allData
      : expenses.product_name.toString() === select ||
          expenses.address.state.toString() === select ||
          expenses.address.city.toString() === select;
  });

  return (
    <div className="app py-5">
      <Container>
        <Row>
          <Col md="2" lg="2" sm="12" xs="12" className="mb-3">
            <Filter allData={allData} onSelect={onSelect} />
          </Col>
          <Col md="10" lg="10" sm="12" xs="12">
            <Products allData={filteredCatItems} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
