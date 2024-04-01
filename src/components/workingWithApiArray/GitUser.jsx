import rn from "random-number";

export const GitUser = ({ thief, toggle, isListView }) => {
  const gen = rn.generator({
    min: 10,
    max: 20,
    integer: false,
  });
  const randomNumber = gen();
  return (
    <>
      {isListView ? (
        <div className="card card-side bg-base-100 shadow-xl">
          <figure className="">
            <img
              src={thief.avatar_url}
              className="h-32 w-32 rounded-full"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <div className="flex gap-2">
              <div className="flex ">
                <button onClick={() => toggle(thief.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill={thief?.liked ? "red" : "none"}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>
              <h2 className="card-title">{thief.login}</h2>
            </div>

            <div className="card-actions justify-end">
              <a
                className="btn btn-primary text-[15px]"
                href={thief.html_url}
                rel="noreferrer"
                target="_blank"
              >
                Visit my GitHub Profile
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10 static flex-col">
            <div className="flex  absolute top-14 left-14">
              <button onClick={() => toggle(thief.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill={thief?.liked ? "red" : "none"}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
            <img
              src={thief.avatar_url}
              alt="Shoes"
              className="rounded-xl h-full w-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{thief.login}</h2>

            <div className="card-actions">
              <a
                className="btn btn-primary"
                href={thief.html_url}
                rel="noreferrer"
                target="_blank"
              >
                Visit my GitHub Profile{" "}
                {randomNumber.toFixed(2)} ----
                {randomNumber.toFixed(5)}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
