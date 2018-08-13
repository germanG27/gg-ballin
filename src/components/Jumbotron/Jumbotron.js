import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Quien soy</h1>
          <p className="lead">
          Me encuentro estudiando las nuevas tecnologías web para impulsar mi conocimiento de estas como para poder
          seguir con mi carrera como programador.
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Example;