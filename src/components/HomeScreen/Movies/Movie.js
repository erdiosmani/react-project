import { useEffect } from "react";
import { Link } from "react-router-dom";

const Movie = (props) => {
  let id = props.id.split("/");



  return (
    <>
      <Link to={`/movie/${id[2]}`}>
        <div className=" py-6 flex flex-col justify-center sm:py-12 mb-7">
          <div className="py-3 sm:max-w-xl sm:mx-auto">
            <div className="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
              <div className="h-48 overflow-visible w-1/2">
                <img
                  className="rounded-3xl shadow-lg"
                  src={props?.url}
                  alt=""
                />
              </div>
              <div className="flex flex-col w-1/2 space-y-4">
                <div className="flex justify-between items-start">
                  <h2 className="text-3xl font-bold">{props.title}</h2>
                  {/* <div className="bg-yellow-400 font-bold rounded-xl p-2">7.2</div> */}
                </div>
                <div>
                  <div className="text-sm text-gray-400">{props.titleType}</div>
                  <div className="text-lg text-gray-800">{props.year}</div>
                </div>
                {/* <p className=" text-gray-400 max-h-40 overflow-y-hidden">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

{
  /* <div className="flex flex-row justify-center gap-5">
                <div className="max-w-sm bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg mt-10">
                    <div id="header" className="flex items-center mb-4">
                        <img alt="avatar" className="w-20 rounded-full border-2 border-gray-300" src={props?.url} />
                        <div id="header-text" className="leading-5 ml-6 sm">
                            <h4 id="name" className="text-xl font-semibold">{props.name}</h4>
                            <h5 id="job" className="font-semibold text-blue-600">{props.title}</h5>
                        </div>
                    </div>
                    <div id="quote">
                        <q className="italic text-gray-600">{props.description}</q>
                    </div>
                </div>

            </div> */
}

export default Movie;
