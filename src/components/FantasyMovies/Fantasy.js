import { useEffect, useState } from "react/cjs/react.development";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import LoadingScreen from "../Placeholders/LoadingScreen";


const Fantasy = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    const fetchMovies = () => {
      var options = {
        method: "GET",
        url: "https://advanced-movie-search.p.rapidapi.com/discover/movie",
        params: { with_genres: "14", page: "1" },
        headers: {
          "x-rapidapi-host": "advanced-movie-search.p.rapidapi.com",
          "x-rapidapi-key": "ddeba3ea2dmshbd5119ef7a3aeb0p112badjsn8403a2ab2911",
        },
      };
  
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data.results);
          setMovies(response.data.results);
          setIsLoading(false);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
  
    useEffect(() => {
      fetchMovies();
    }, []);
  
    return (
      <div>
        <Navbar />
        <div>
          {isLoading === true ? (
            <>
              <LoadingScreen />
            </>
          ) : (
            <>
              <div className="flex w-full flex-row flex-wrap justify-between">
                {movies &&
                  movies?.map((item, index) => (
                    <div
                      key={index}
                      className="h-auto p-3 flex-col m-5 max-w-xs flex shadow-xl"
                    >
                      <div className="">
                        <img src={item.backdrop_path} className="w-full" />
                      </div>
                      <div className="w-full flex mt-2 ">
                        <p className="font-bold text-lg text-black">
                          {item.original_title}
                        </p>
                      </div>
                      <div className="flex flex-row w-full items-center">
                        <p className="flex-1"> Date: {item.release_date}</p>
                        <div className="p-2 bg-orange-600 items-center justify-center flex rounded-3xl mt-3">{item.vote_average}</div>
                      </div>
                    </div>
                  ))}
              </div>
            </>
          )}
        </div>
      </div>
    );
  };
  

export default Fantasy
