import React from "react";
import "rbx/index.css";

import { Navbar } from "rbx";
import { Grid, Row } from "react-styled-flexboxgrid";

export default function DisplayCrimes({ crimes, categories }) {
  const [filterCategory, setFilterCategory] = React.useState(null);

  const filteredCrimes = filterCategory
    ? crimes.filter((crime) => crime.category === filterCategory)
    : crimes;
  return (
    <div>
      <Navbar>
        <Grid>
          <Row>
            <Navbar.Brand>
              <Navbar.Item href="#">
                <img
                  src="https://bulma.io/images/bulma-logo.png"
                  alt=""
                  role="presentation"
                  width="112"
                  height="28"
                />
              </Navbar.Item>
            </Navbar.Brand>
            <Navbar.Item dropdown>
              <Navbar.Link>Crimes</Navbar.Link>
              <Navbar.Dropdown>
                {categories.map((category) => (
                  <Navbar.Item
                    outlined
                    color="success"
                    onClick={() => setFilterCategory(category)}
                    key={category}
                  >
                    {category}
                  </Navbar.Item>
                ))}
              </Navbar.Dropdown>
            </Navbar.Item>

            {filterCategory && (
              <Navbar.Item onClick={() => setFilterCategory(null)}>
                Reset
              </Navbar.Item>
            )}
          </Row>
        </Grid>
      </Navbar>
      <Grid>
        <pre>{JSON.stringify(filteredCrimes, null, 2)}</pre>;
      </Grid>
    </div>
  );
}
