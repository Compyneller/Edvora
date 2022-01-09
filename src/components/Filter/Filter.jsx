import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import CityFIlter from "./CityFIlter";
import PoductsFilter from "./PoductsFilter";
import StateFilter from "./StateFilter";

const Filter = ({ allData, onSelect }) => {
  return (
    <Card style={{ width: "100%", background: "#131313" }} className=" p-2">
      <Row>
        <Col md="12" lg="12" sm="3" xs="3">
          <Card.Header>Filters</Card.Header>
        </Col>
        <Col md="12" lg="12" sm="3" xs="3">
          <PoductsFilter allData={allData} onSelect={onSelect} />
        </Col>
        <Col md="12" lg="12" sm="3" xs="3">
          <StateFilter allData={allData} onSelect={onSelect} />
        </Col>
        <Col md="12" lg="12" sm="3" xs="3">
          <CityFIlter allData={allData} onSelect={onSelect} />
        </Col>
      </Row>
    </Card>
  );
};

export default Filter;
