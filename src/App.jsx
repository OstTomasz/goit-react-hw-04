import { useGetImages } from "./Hooks/useGetImages";

import { SearchBar } from "./components/SearchBar/SearchBar";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";
import { Loader } from "./components/Loader/Loader";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { LoadMoreBtn } from "./components/LoadMoreBtn/LoadMoreBtn";

export const App = () => {
  const { gallery, isLoading, error, getImgs, getMoreImg } = useGetImages();

  return (
    <>
      <SearchBar getImgs={getImgs} />
      {error ? <ErrorMessage /> : <ImageGallery gallery={gallery} />}
      {isLoading ? <Loader /> : null}
      {gallery.length > 0 ? <LoadMoreBtn getMoreImg={getMoreImg} /> : null}
    </>
  );
};
