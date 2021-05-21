/** @format */
import Thumnail from "./Thumnail";
function Results({ results }) {
  return (
    <div className="px-5 py-10 sm:grid md:grid-cols-2 lg:grid-cols-3">
      {/* Get request to map to every single one results will comeback */}
      {results.map((result) => (
        <Thumnail key={result.id} result={result}/>
      ))}
    </div>
  );
}

export default Results;
