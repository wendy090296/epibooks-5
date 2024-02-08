import { render, screen } from "@testing-library/react";
// import App from "./App";
import Welcome from "../src/components/Welcome";
// import BookList from "../src/components/BookList";
import "./data/fantasy.json";
import CommentArea from "./components/CommentArea";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("Mounting test", () => {
  it("verifico se welcome é correttamente renderizzato", () => {
    render(<Welcome />); //1) monto componente di interesse
    const h1 = screen.getByText("Benvenuti in EpiBooks!"); // 2)seleziono l'lemento dal DOM
    expect(h1).toBeInTheDocument(); //3) verifico se risultato atteso é ottenuto
  });

  // it("verifico se BookList renderizza lo stesso numero di card per quanti sono i libri", () => {
  //   render(<BookList books={fantasy} />);
  //   const arrayCards = screen.findAllByTestId("book-card");

  it("controllo se CommentaArea é correttamente renderizzato", () => {
    render(<CommentArea />);
  });
});
