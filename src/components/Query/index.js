import React from "react";
import { useQuery } from "@apollo/react-hooks";

const Query = ({ children, query, slug }) => {
  const { data, loading, error } = useQuery(query, {
    variables: { slug: slug },
  });

  if (loading)
    return (
      <>
        <svg
          width="346"
          height="366"
          viewBox="0 0 346 366"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex md:hidden mt-10 ml-4 animate-pulse"
        >
          <path
            d="M346 200.146C346 210.559 335.795 219 323.206 219H22.7942C10.2051 219 0 210.559 0 200.146V18.854C0 8.44129 10.2051 0 22.7942 0H323.206C335.795 0 346 8.44129 346 18.854V200.146Z"
            fill="#C4C4C4"
          />
          <path d="M346 251H0V255H346V251Z" fill="#929292" />
          <path d="M260 288H28V292H260V288Z" fill="#929292" />
          <path d="M329 362H97V366H329V362Z" fill="#929292" />
          <path d="M346 325H0V329H346V325Z" fill="#929292" />
        </svg>

        <svg
          className="hidden md:flex md:w-auto animate-pulse"
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          width="1440px"
          height="647px"
          viewBox="0 0 1440 647"
          enable-background="new 0 0 1440 647"
        >
          <g>
            <path
              fill="#F1F2F2"
              d="M478.758,384.347c0,12.946-12.705,23.441-28.378,23.441H76.378C60.705,407.788,48,397.293,48,384.347
		V158.948c0-12.946,12.705-23.441,28.378-23.441H450.38c15.673,0,28.378,10.495,28.378,23.441V384.347z"
            />
            <path
              fill="#F1F2F2"
              d="M935.042,384.347c0,12.946-12.705,23.441-28.378,23.441H532.662c-15.672,0-28.378-10.495-28.378-23.441
		V158.948c0-12.946,12.705-23.441,28.378-23.441h374.002c15.672,0,28.378,10.495,28.378,23.441V384.347z"
            />
            <path
              fill="#F1F2F2"
              d="M1391.326,384.347c0,12.946-12.705,23.441-28.378,23.441H988.946c-15.673,0-28.378-10.495-28.378-23.441
		V158.948c0-12.946,12.705-23.441,28.378-23.441h374.002c15.672,0,28.378,10.495,28.378,23.441V384.347z"
            />
            <rect
              x="48"
              y="447.788"
              fill="#414042"
              width="430.758"
              height="5"
            />
            <rect
              x="83.404"
              y="494.023"
              fill="#414042"
              width="288.475"
              height="5"
            />
            <rect
              x="169.174"
              y="586.493"
              fill="#414042"
              width="288.475"
              height="5"
            />
            <rect
              x="48"
              y="540.258"
              fill="#414042"
              width="430.758"
              height="5"
            />
            <rect
              x="504.284"
              y="447.788"
              fill="#414042"
              width="430.758"
              height="5"
            />
            <rect
              x="504.284"
              y="494.023"
              fill="#414042"
              width="288.475"
              height="5"
            />
            <rect
              x="504.284"
              y="586.493"
              fill="#414042"
              width="430.758"
              height="5"
            />
            <rect
              x="592.641"
              y="540.258"
              fill="#414042"
              width="342.4"
              height="5"
            />
            <g>
              <rect
                x="960.568"
                y="586.493"
                fill="#414042"
                width="430.758"
                height="5"
              />
              <rect
                x="1067.447"
                y="540.258"
                fill="#414042"
                width="288.475"
                height="5"
              />
              <rect
                x="981.677"
                y="447.788"
                fill="#414042"
                width="288.475"
                height="5"
              />
              <rect
                x="960.568"
                y="494.023"
                fill="#414042"
                width="430.758"
                height="5"
              />
            </g>
            <path
              fill="#F1F2F2"
              d="M1392,70.507c0,8.284-6.716,15-15,15H63c-8.284,0-15-6.716-15-15l0,0c0-8.284,6.716-15,15-15h1314
		C1385.284,55.507,1392,62.222,1392,70.507L1392,70.507z"
            />
          </g>
        </svg>
      </>
    );
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  return children({ data });
};

export default Query;
