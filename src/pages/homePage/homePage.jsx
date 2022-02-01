import Header from "../../components/header/header";
import Topic from "../../components/topic/topic";
import FilmCard from "../../components/filmCard/filmCard";
import "../pagesStyles.css";
import { moviesService } from "../../redux/slices/services";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const HomePage = () => {
  const movieReducer = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(moviesService());
  },);
  console.log(movieReducer.moviesReducer.name);
  return (
    <div id="homePageContainer">
      <Header state={false} avatar={"B"} />
      <Topic content={"Discover"} />
      <div id="discoverContainer">
        <FilmCard
          img={movieReducer.moviesReducer.img}
          name={movieReducer.moviesReducer.name}
          date={movieReducer.moviesReducer.date}
        />
        <FilmCard
          img={movieReducer.moviesReducer.img}
          name={movieReducer.moviesReducer.name}
          date={movieReducer.moviesReducer.date}
        />
        <FilmCard
          img={movieReducer.moviesReducer.img}
          name={movieReducer.moviesReducer.name}
          date={movieReducer.moviesReducer.date}
        />
        <FilmCard
          img={movieReducer.moviesReducer.img}
          name={movieReducer.moviesReducer.name}
          date={movieReducer.moviesReducer.date}
        />
        <FilmCard
          img={movieReducer.moviesReducer.img}
          name={movieReducer.moviesReducer.name}
          date={movieReducer.moviesReducer.date}
        />
        <FilmCard
          img={movieReducer.moviesReducer.img}
          name={movieReducer.moviesReducer.name}
          date={movieReducer.moviesReducer.date}
        />
      </div>
      <Topic content={"Trending"} />
      <div id="discoverContainer">
        <FilmCard
          img={movieReducer.moviesReducer.img}
          name={movieReducer.moviesReducer.name}
          date={movieReducer.moviesReducer.date}
        />
        <FilmCard
          img={movieReducer.moviesReducer.img}
          name={movieReducer.moviesReducer.name}
          date={movieReducer.moviesReducer.date}
        />
        <FilmCard
          img={movieReducer.moviesReducer.img}
          name={movieReducer.moviesReducer.name}
          date={movieReducer.moviesReducer.date}
        />
        <FilmCard
          img={movieReducer.moviesReducer.img}
          name={movieReducer.moviesReducer.name}
          date={movieReducer.moviesReducer.date}
        />
        <FilmCard
          img={movieReducer.moviesReducer.img}
          name={movieReducer.moviesReducer.name}
          date={movieReducer.moviesReducer.date}
        />
        <FilmCard
          img={movieReducer.moviesReducer.img}
          name={movieReducer.moviesReducer.name}
          date={movieReducer.moviesReducer.date}
        />
      </div>
    </div>
  );
};

export default HomePage;
