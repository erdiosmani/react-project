import { useState } from "react";
import Movies from "../Movies/Movies";
import "./Hero.css";
import axios from "axios";

const Hero = () => {
  const [searchedMovie, setSearchedMovie] = useState(null);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onInputChange = (event) => {
    setSearchedMovie(event.target.value);
  };

  const onInputEnterClick = (event) => {
    var options = {
      method: "GET",
      url: "https://imdb8.p.rapidapi.com/title/find",
      params: { q: searchedMovie },
      headers: {
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
        "x-rapidapi-key": "ddeba3ea2dmshbd5119ef7a3aeb0p112badjsn8403a2ab2911",
      },
    };

    if (event.key == "Enter") {
      if (searchedMovie === null || searchedMovie.trim() === "") {
        window.alert("Nuk keni shkuar input");
      } else {
        setIsLoading(true);
        axios
          .request(options)
          .then(function (response) {
            console.log(response.data.results);
            setMovies(response.data.results);
            setIsLoading(false);
          })
          .catch(function (error) {
            console.error(error);
            setIsLoading(false);
          });
      }
    }
  };

  return (
    <div className="flex justify-center flex-col ">
      <div className="flex justify-center flex-col sm:flex-row max-w-7xl mx-auto">
        <div className=" relative mx-auto text-gray-600 w-1/2 justify-center flex">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 p-20 flex flex-col">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Search for your</span>{" "}
                <span className="block text-indigo-600 xl:inline">
                  favourite movie
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Here you can search, and find details about certain movies that
                may be interesing for you. All you have to do is type the movie
                you want to see.
              </p>
            </div>
            <input
              className="border-2 border-gray-300 bg-white px-5 pr-16 rounded-lg text-sm focus:outline-none mt-10 w-full h-14"
              type="search"
              name="search"
              placeholder="Search"
              value={searchedMovie ?? ""}
              onChange={(event) => onInputChange(event)}
              onKeyPress={(event) => onInputEnterClick(event)}
            />
            
          </main>
        </div>

        <div className="pt-2 relative mx-auto text-gray-600 backgroundimageHero w-1/2 h-auto rounded-bl-lg"></div>
      </div>
      <div className="w-full justify-center  border-6">
        <Movies
          searchedMovie={searchedMovie}
          movies={movies}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default Hero;
