export const DifficultySelect = ({ handleChange }) => {
  return (
    <>
      <select
        onChange={(e) => {
          handleChange(e);
        }}
        name="difficulty"
      >
        <option style={{ color: "black" }} value="easy">
          easy
        </option>
        <option style={{ color: "black" }} value="medium">
          medium
        </option>
        <option style={{ color: "black" }} value="hard">
          hard
        </option>
      </select>
    </>
  );
};
