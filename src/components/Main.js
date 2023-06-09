import React from "react";
import Cards from "./Cards";
import Data from "../Data";

// let fData = Data.filter((val)=> val.rating>=9.0)
// console.log(fData[1].title)
// console.log(fData.map((fval)=>fval.title))

// const topMovies = () => {
//   return  console.log(fData.map((fval)=>fval.title))
// }

console.log(Data.length);

export default function Main() {
  return (
    <>
      {Data.map((val) => {
        // console.log(index)
        // console.log(arr)
        return (
          <Cards
            key={val.rank}
            Image={val.image}
            Title={val.title}
            Description={val.description}
            Rating={val.rating}
            Year={val.year}
            link={val.trailer}
            Genre={val.genre}
            Director={val.director}
            Writers={val.writers}
          />
        );
      })}
    </>
  );
}
