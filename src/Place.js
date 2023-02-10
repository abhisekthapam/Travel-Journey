import './App.css';

export default function Place(props) {
  return (
    <div className="Places">
      <div>
      <img src={props.img} className="place" alt='Maldives' />
      </div>
      <div>
      <p>{props.location}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href={props.map} className="link"  rel="noreferrer" target="_blank">View On Google Earth</a></p>
      <h1 className='detail'>{props.name}</h1>
      <p className='p1'><strong>{props.date}</strong></p>
      <p className='p1'>{props.detail}</p>
      </div>
    </div>
  );
}

