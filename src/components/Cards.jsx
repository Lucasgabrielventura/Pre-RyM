import Card from './Card';

//estructura de las tarjetas (contenedor)
export default function Cards({characters, onClose}) {
  return (
  <div>
      {characters.map(({id, name, species, gender, image}) => {
      return <Card 
      key={id}
      name={name} 
      species={species}
      gender={gender}
      image={image}
      id={id}
      onClose={() => onClose(id)}
      />
    })
    }
  </div>
  )
}
