import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import Welcome from "../src/components/Welcome";
import "./data/fantasy.json";
import CommentArea from "./components/CommentArea";
import fantasy from "./data/fantasy.json";
import AllTheBooks from "./components/AllTheBooks";
import SingleBook from "./components/SingleBook";
import SingleComment from "./components/SingleComment";

// 1) verifica che il componente welcome é correttamente montato

describe("Mounting test", () => {
  it("verifico se welcome é correttamente renderizzato", () => {
    render(<Welcome />); //1) monto componente di interesse
    const h1 = screen.getByText("Benvenuti in EpiBooks!"); // 2)seleziono l'lemento dal DOM
    expect(h1).toBeInTheDocument(); //3) verifico se risultato atteso é ottenuto
  });

  // 2) verifica che il numero di cards corrisponde al numero dei libri nell'oggetto json

  it("controllo se il numero di cards é uguale al numero di libri  nel json", async () => {
    render(<AllTheBooks />);
    const books = fantasy;
    const cards = await screen.findAllByTestId("card");
    expect(cards).toHaveLength(books.length);
  });

  // 3) verifica se commentArea é correttamente montato

  it("verifico se CommentaArea é correttamente renderizzato", () => {
    render(<CommentArea />);
  });
  // 4) verifica che searchNavbar si comporti come previsto

  it("verico se searchNavbar si renderizza correttamente", () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText("Cerca un libro");
    fireEvent.change(searchInput, { target: { value: searchInput.value } });
    const cards = screen.queryAllByTestId("card");
    expect(cards).not.toHaveLength(0);
  });

  // 5)  Verifica che, cliccando su un libro, il suo bordo cambi colore.

  it("il bordo cambia colore al click della card", async () => {
    render(
      <SingleBook changeSelectedBook={() => {}} selectedBook={[]} book={{}} />
    );
    const img = await screen.findAllByTestId("book");

    fireEvent.click(img[0]);
    const selectedCard = await screen.findAllByTestId("card");

    expect(selectedCard[0]).toHaveStyle({ borderColor: "danger" });
  });

  //Verifica che, cliccando su  un secondo libro dopo il primo, il bordo del primo libro ritorni normale.

  // it("cliccando su un secondo libro, il bordo del primo si normalizza", () => {
  //   render(
  //     <SingleBook changeSelectedBook={() => {}} selectedBook={[]} book={{}} /> // renderizzo il componente in questione
  //   ); // seleziono gli elementi dal DOM
  //   const img = screen.getAllByRole("img");
  //   fireEvent.click(img[0]); // click del primo libro
  //   fireEvent.click(img[1]); // click del secondo libro
  //   expect(img[0]).toHaveStyle("border:none");
  // });

  //Verifica che all’avvio della pagina, senza aver ancora cliccato su nessun libro, non ci siano istanze del componente SingleComment all’interno del DOM.
  //   Verifica infine che, cliccando su di un libro con recensioni, esse vengano caricate correttamente all’interno del DOM.

  // it("controllo che non ci siano istanze di singleComment", async () => {
  //   render(<SingleComment prop={[0]} />);
  //   const commentArea = screen.queryAllByTestId("list-item");
  //   expect(commentArea).toHaveLength(0);
  //   const book = screen.queryAllByTestId("single-book");
  //   fireEvent.click(book[0]);
  //   const newCommentArea = await screen.findAllByTestId("list-item");
  //   expect(newCommentArea).not.toHaveLength(0);
  // });
});
