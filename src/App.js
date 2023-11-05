import { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchImages from "./components/api";
import ImageList from "./components/imageList";
function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const results = await SearchImages(term);
    setImages(results);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
