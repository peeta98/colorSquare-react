import colorNames from "colornames";

function Input({
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Add Color Name:</label>
      <input
        autoFocus
        type="text"
        placeholder="Add color name"
        required
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        Toogle Text Color {isDarkText ? "(White)" : "(Black)"}
      </button>
    </form>
  );
}

export default Input;
