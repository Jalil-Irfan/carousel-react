import './App.css';
import Carousel from './carousel';
import data from './data';

function App() {
  return (
    <Carousel images={data.images} width={data.width} height={data.height} auto={data.auto} duration={data.duration}></Carousel>
  );
}

export default App;
