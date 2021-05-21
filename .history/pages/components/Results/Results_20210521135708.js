/** @format */
import Thumnail from "./Thumnail";
function Results({ results }) {
  return (
    <div className="px-5 py-4">
      {/* Get request to map to every single one results will comeback */}
      {results.map((result) => (
        <Thumnail key={result.id} result={result}/>
      ))}
    </div>
  );
}

export default Results;
