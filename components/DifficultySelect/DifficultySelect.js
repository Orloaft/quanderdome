export const DifficultySelect = ({ handleChange }) => {
  return (
    <>
      <select
        onChange={(e) => {
          handleChange(e);
        }}
        name="difficulty"
      >
        <option value="easy">easy</option>
        <option value="medium">medium</option>
        <option value="hard">hard</option>
      </select>
    </>
  );
};
