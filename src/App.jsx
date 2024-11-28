import { useGetImages } from "./Hooks/useGetImages";

import { SearchBar } from "./components/SearchBar/SearchBar";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";
import { Loader } from "./components/Loader/Loader";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { LoadMoreBtn } from "./components/LoadMoreBtn/LoadMoreBtn";

export const App = () => {
  const { gallery, isLoading, error, getImgs } = useGetImages();

  if (error) {
    return <ErrorMessage />;
  }
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <SearchBar getImgs={getImgs} />
      <ImageGallery gallery={gallery} />
      {gallery.length > 0 ? <LoadMoreBtn /> : null}
    </>
  );
};
