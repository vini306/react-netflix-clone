import React from 'react';
import jumboData from  './fixtures/jumbo.json';
import Jumbrotron from './components/jumbotron';

export default function App() {
  return (
    <div className="App">
      <Jumbrotron.Container>
        {jumboData.map((item) => (
          <Jumbrotron key={item.id} direction={item.direction}>
            <Jumbrotron.Pane>
              <Jumbrotron.Title>{item.title}</Jumbrotron.Title>
              <Jumbrotron.SubTitle>{item.subTitle}</Jumbrotron.SubTitle>
            </Jumbrotron.Pane>
            <Jumbrotron.Pane>
              <Jumbrotron.Image src={item.image} alt={item.alt} />            
            </Jumbrotron.Pane>
          </Jumbrotron>
        ))}
      </Jumbrotron.Container>
    </div>
  );
}


