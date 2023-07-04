import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Images from './Components/Images';
import LoadSVG from 'react-loadsvg';
import InfiniteScroll from 'react-infinite-scroller';
import LightBox from './Components/LightBox';

const perPage = 15;
const apiKey = "qh6BhiQNQLv1omChMdjCuVOVWtS4QCch5E7rm8cIEcf8QgAm3C6369UY";

function App() {
  const[photos,setPhotos] = useState([])
  const[searchPhotos,setSearchPhotos] = useState([])
  const [searchTerm,setSearchTerm] = useState("");
  const [selectedImage,setSelectedImage] = useState(null)

  function searchGetter(current) {
    const apiURL = `https://api.pexels.com/v1/search?query=${searchTerm}&page=${current}&per_page=${perPage}`;

    fetch(apiURL, {
      headers: {
        Authorization: apiKey
      }
    }).then((res) => res.json()).then((data) => {
      console.log(data);
      setSearchPhotos((prevData)=>{
        const newData=[...prevData]
        for(let photo of data.photos){
          if (!newData.find((item)=>item.id===photo.id)) {
            newData.push(photo)
          }
        }
        return newData
      });
    }).catch((err) => console.error(err))
  }

  useEffect(()=>{
    setSearchPhotos([]);
  },[searchTerm])

  function imageGetter(current) {

    const apiURL = `https://api.pexels.com/v1/curated?page=${current}&per_page=${perPage}`

    fetch(apiURL, {
      headers: {
        Authorization: apiKey
      }
    }).then((res) => res.json()).then((data) => {
      console.log(data);
      setPhotos((prevData)=>{
        const newData=[...prevData]
        for(let photo of data.photos){
          if (!newData.find((item)=>item.id===photo.id)) {
            newData.push(photo)
          }
        }
        return newData
      });
    }).catch((err) => console.error(err))
  }

  useEffect(()=>{
    window.document.body.style.overflow = selectedImage?"hidden":""
  },[selectedImage])

  return (
    <div className="App">
      <Header images={photos} perPage={perPage} setSearchTerm={setSearchTerm}/>
      {!searchTerm && <InfiniteScroll
        // pageStart={0}           //currentPage-kaunse  page se shuru  karna hai default - 0
        loadMore={imageGetter}  //kause function run karna hai.Yahan hum photo fetch ko ek function banake pass kar rahe hain
        hasMore={true} //aur load karna hai ya nahi
        loader={<div className='loadingClass' key={0}><LoadSVG size={50} duration={1200} /></div>}
      >
        <Images images={photos} setSelectedImage={setSelectedImage} />
      </InfiniteScroll>}

      {searchTerm && <InfiniteScroll
        // pageStart={0}           //currentPage-kaunse  page se shuru  karna hai default - 0
        loadMore={searchGetter}  //kause function run karna hai.Yahan hum photo fetch ko ek function banake pass kar rahe hain
        hasMore={true} //aur load karna hai ya nahi
        loader={<div className='loadingClass' key={0}><LoadSVG size={50} duration={1200} /></div>}
      >
        <Images images={searchPhotos} setSelectedImage={setSelectedImage}/>
      </InfiniteScroll>
      }

      {selectedImage && <LightBox selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}

      
    </div>


  );
}

export default App;
