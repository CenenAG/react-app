export function Greeting( {title}  ) {
  console.log(title)
  return <h1>Componente de React {JSON.stringify(title)}  </h1>;
}

export function UserCard( {name, married, points, address} ) {
  return <div>
    <h1>{name}</h1>
    <p>{married? "Married": "Single"}</p>
    <p>{points[0]}, {points[2]}, {points[2]} </p>
    <p>{address.street}</p>
    <p>{address.city}</p>
  </div>}
