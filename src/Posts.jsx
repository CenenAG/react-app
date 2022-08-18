export const Posts = () => {
  const obtieneDatos = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return <button onClick={obtieneDatos}>Traer Datos</button>;
};
