import './App.css';
import Place from './Place';
import data from "./data"

function App(props) {
  const tour = data.map(item => {
    return(
      <Place 
      key = {item.id}
      {...item}
      />
    )
  })
  return (
    <div>
      {tour}
    </div>
  );
}

export default App;
