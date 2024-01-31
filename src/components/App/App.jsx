import { Component } from "react";
import { Searchbar } from "../Searchbar/Searchbar";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { Button } from "../Button/Button";
import { Loader } from "../Loader/Loader"; 
import { fetchImages } from "services/images-api";
import styles from './App.module.css';

export class App extends Component {
  state = {
    query: '',
    images: [],
    error: null,
    status: 'idle',
    page: 1,
    maxPage: null
  }

  async componentDidUpdate(_, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (nextPage !== prevPage || nextQuery !== prevQuery) {
      this.setState({ status: 'pending' });
    
      try {
        const { hits, totalHits } = await fetchImages(nextQuery, nextPage);

        this.setState(({ images }) => ({
          images: hits?.length ? [...images, ...hits] : images,
          maxPage: Math.ceil(totalHits / 12 ),
          status: 'resolved'
        }))

        console.log(totalHits);
        
      }
      catch (error) {
        this.setState({ error: error.message, status: 'rejected' });
      }
    }
  }

  handleSearch = (query) => {
    this.setState({
      query,
      images: [],
      page: 1
    });
  }

  loadMore = () => {
    this.setState(({ page }) => ({page: page + 1}));
  }
  

  render() {
    const { handleSearch,loadMore } = this;
    const { query, images, error, status, page, maxPage } = this.state;

    return (
      <div className={styles.App}>
        <Searchbar onSubmit={handleSearch} />
        
        {status === 'idle' && <p className={styles.DefaultText}>Search images</p>}
        {status === 'pending' && <Loader />}
        {status === 'rejected' && <p>{error}</p>}
        {status === 'resolved' && !images.length && <p>Sorry, no images for {query}. Please, enter a valid query.</p>}
        {status === 'resolved' && images.length > 0 &&
          <>
          <ImageGallery items={images} />
          {page < maxPage && <Button onClick={loadMore}>Load More</Button>}
          </>}
      </div>
    )
  }
};