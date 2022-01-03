import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import LoadingScreen from "../Placeholders/LoadingScreen";

const SingleMovie = () => {
  const [rating, setRating] = useState({});
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  var options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/get-details",
    params: { tconst: id },
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "ddeba3ea2dmshbd5119ef7a3aeb0p112badjsn8403a2ab2911",
    },
  };

  var optionsRating = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/get-ratings",
    params: { tconst: id },
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "ddeba3ea2dmshbd5119ef7a3aeb0p112badjsn8403a2ab2911",
    }, 
  };

  useEffect(async () => {
    console.log(id);

    await axios
      .request(options)
      .then(function (response) {
        console.log("details");
        console.log(response.data);
        setDetails(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    await axios
      .request(optionsRating)
      .then(function (response) {
        console.log("rating");
        console.log(response.data);
        setRating(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });


    await setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <LoadingScreen/>
        </>
      ) : (
        <>
          <Navbar />
          <div className="h-auto flex justify-center ">
            <div className=" max-w-7xl h-full w-full p-10 flex flex-row">
              <div className="max-h-96 mr-10">
                <img src={details?.image?.url} alt="image" className="h-96" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-5xl text-blue-900 font-extrabold">
                  {details?.title}
                </h1>
                <div className="flex">
                  <h1 className="text-xl font-bold mt-5 flex-1">
                    {details?.year}
                  </h1>
                  <div className="p-2 bg-orange-600 items-center justify-center flex rounded-3xl mt-3">
                    <h1 className="text-xl font-bold text-white ">
                      {rating?.rating}
                    </h1>
                  </div>
                </div>

                {details?.titleType === "tvSeries" ? (
                  <div className="flex flex-row mt-5">
                    <div>
                      <h1 className="flex-1">
                        Start year: <span className="font-bold">{details?.seriesStartYear}</span>
                      </h1>
                      <h1 className="flex-1">
                        End year: <span className="font-bold">{details?.seriesEndYear}</span>
                      </h1>
                        
                      <video/>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SingleMovie;
