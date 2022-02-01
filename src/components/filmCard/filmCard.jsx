import "../styles.css";
const FilmCard = ({ img, name, date }) => {
  return (
    <div id="filmCardContainer">
      <img src={img} alt="kapak" width={"90%"} height={"80%"} />
      <div id="filmCardBottomContainer">
        <p id="txt">{name}</p>
        <p id="txt2">{date}</p>
      </div>
    </div>
  );
};

export default FilmCard;
