/** @format */
import Thumnail from "./Thumnail";
import FlipMove from "react-flip-move";

function Results({ results }) {
  if (!results) {
    results = [];
  }
  return (
    <FlipMove className="px-5 py-10 sm:grid md:grid-cols-2 xl:grid-cols-4 3xl:flex flex-wrap justify-center">
      {/* Get request to map to every single one results will comeback */}
      {results.map((result) => (
        <Thumnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
}

export default Results;
