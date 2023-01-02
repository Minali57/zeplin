import Pagination from "react-bootstrap/Pagination";
import "./Paginate.css";

const Paginate = () => {
  const someNumbersList = [0, 1, 2, 3, 4];
  return (
    <>
      {/* <div style={{ display: "flex", justifyContent: "center" }}> */}
      <div className="pagi">
        <Pagination size="sm">
          <Pagination.First />
          <Pagination.Prev />
          {someNumbersList.map((i, key) => (
            <Pagination.Item key={key} active={i === 0}>
              {i + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    </>
  );
};

export default Paginate;
