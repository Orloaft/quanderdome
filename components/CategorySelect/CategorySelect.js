export const CategorySelect = ({ handleChange }) => {
  return (
    <>
      <select
        onChange={(e) => {
          handleChange(e);
        }}
        name="category"
      >
        <option style={{ color: "black" }} value="9">
          General Knowledge
        </option>
        <option style={{ color: "black" }} value="10">
          Entertainment: Books
        </option>
        <option style={{ color: "black" }} value="11">
          Entertainment: Film
        </option>
        <option style={{ color: "black" }} value="12">
          Entertainment: Music
        </option>
        <option
          style={{ color: "black" }}
          value={"13"}
        >{`Entertainment: Musicals & Theatres`}</option>
        <option style={{ color: "black" }} value="14">
          Entertainment: Television
        </option>
        <option style={{ color: "black" }} value="15">
          Entertainment: Video Games
        </option>
        <option style={{ color: "black" }} value={"16"}>
          Entertainment: Board Games
        </option>
        <option style={{ color: "black" }} value="29">
          Entertainment: Comics
        </option>
        <option style={{ color: "black" }} value={"31"}>
          {"Entertainment: Japanese Anime & Manga"}
        </option>
        <option style={{ color: "black" }} value={"32"}>
          {"Entertainment: Cartoon & Animations"}
        </option>
        <option style={{ color: "black" }} value={"17"}>
          {"Science & Nature"}
        </option>
        <option style={{ color: "black" }} value="18">
          Science: Computers
        </option>
        <option style={{ color: "black" }} value={"19"}>
          Science: Mathematics
        </option>
        <option style={{ color: "black" }} value="20">
          Mythology
        </option>
        <option style={{ color: "black" }} value={"21"}>
          Sports
        </option>
        <option style={{ color: "black" }} value="22">
          Geography
        </option>
        <option style={{ color: "black" }} value="23">
          History
        </option>
        <option style={{ color: "black" }} value={"24"}>
          Politics
        </option>
        <option style={{ color: "black" }} value="25">
          Art
        </option>
        <option style={{ color: "black" }} value="26">
          Celebrities
        </option>
        <option style={{ color: "black" }} value={"27"}>
          Animals
        </option>
        <option style={{ color: "black" }} value="28">
          Vehicles
        </option>
      </select>
    </>
  );
};
