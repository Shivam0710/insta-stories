import Header from "./components/Header/Header";
import StoriesContainer from "./components/StoriesContainer/StoriesContainer";

export default function Home() {
  return (
    <main className="h-screen w-screen dark:bg-black bg-white">
      <Header />
      <StoriesContainer />
    </main>
  );
}
