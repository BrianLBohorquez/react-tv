/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
import ShowSelection from "./shows/ShowSelection.jsx";
import ShowDetails from "./shows/ShowDetails.jsx";

export default function App() {
  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection />
      </header>
      <main>
        <ShowDetails />
      </main>
    </>
  );
}
