import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

function Home() {
  const [searchText, setSearchText] = useState(''); // State for the search input
  const DoctorList = [
    {
        "id": 1,
        "name": "Jassica",
        "professional": "Surgical"
      },
      {
        "id": 2,
        "name": "John",
        "professional": "Dentist"
      },
      {
        "id": 3,
        "name": "Emily",
        "professional": "Pediatrician"
      },
      {
          "id": 4,
          "name": "Emily",
          "professional": "Pediatrician"
        },
        {
          "id": 5,
          "name": "Emily",
          "professional": "Pediatrician"
        },
        {
          "id": 6,
          "name": "Emily",
          "professional": "Pediatrician"
        },
        {
          "id": 7,
          "name": "Emily",
          "professional": "Pediatrician"
        },
        {
          "id": 8,
          "name": "Emily",
          "professional": "Pediatrician"
        },
        {
          "id": 9,
          "name": "Emily",
          "professional": "Pediatrician"
        },
        {
          "id": 10,
          "name": "Emily",
          "professional": "Pediatrician"
        }
  ];

  // Function to handle changes in the search input
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  // Function to filter the doctor list based on the search input
  const filteredDoctors = DoctorList.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <h1>Doctor List</h1>
      <input
        type="search"
        placeholder="Search Doctor..."
        value={searchText}
        onChange={handleSearchChange}
      ></input>
      <Row>
        {filteredDoctors.map((doctor) => (
          <Col key={doctor.id} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <Card.Body>
              <Card.Text>ID: {doctor.id}</Card.Text>
                <Card.Title>{doctor.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {doctor.professional}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Home;
