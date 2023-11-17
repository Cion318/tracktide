import { Link } from "react-router-dom";

function ListGenerator() {
  return (
    <div>
      <h1>Second Page</h1>
      <p>This is the second page content.</p>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default ListGenerator;
