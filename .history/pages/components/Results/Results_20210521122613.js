/** @format */
import Thumnail from "./Thumnail";
function Results({ results }) {
  return (
    <div>
      {/* Get request to map to every single one results will comeback */}
      {results.map((result) => (
        <Thumnail key={result.id} result={result}/>
      ))}
    </div>
  );
}

export default Results;
