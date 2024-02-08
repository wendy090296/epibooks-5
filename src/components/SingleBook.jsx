import { Card } from "react-bootstrap";

const SingleBook = ({ changeSelectedBook, selectedBook, book }) => {
  return (
    <>
      <Card
        onClick={() => changeSelectedBook(book.asin)}
        style={{
          border: selectedBook === book.asin ? "3px solid red" : "none",
        }}
        data-testid="card"
      >
        <Card.Img variant="top" src={book.img} data-testid="book" />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;
