import PropTypes from "prop-types";

export function Button({ text, name }) {
  console.log(text);
  const laFuncion = function () {
    console.log("Hola Mundo!");
  };

  return (
    <button onClick={laFuncion}>
      {text}-{name}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

Button.defaultProps = { name: "Usuario" };
