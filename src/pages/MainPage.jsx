import React, { useEffect, useState, useCallback } from 'react';
import { CatList } from '../components/CatList';
import { Header } from '../components';
import { callApi } from '../helper/callApi';
import { StyledMainPage } from './MainPage.style';

const MainPage = () => {
  const [images, setImages] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [votes, setVotes] = useState([]);
  const [selectedFile, setSelectedFile] = useState();

  const getCatsData = useCallback(() => {
    callApi({ url: 'images', params: { limit: 100 } }).then((response) =>
      setImages(response)
    );

    callApi({ url: 'favourites' }).then((response) => setFavourites(response));
    callApi({ url: 'votes' }).then((response) => setVotes(response));
  }, []);

  useEffect(() => {
    getCatsData();
  }, [getCatsData]);

  const setFav = useCallback(
    (isFav, id) => {
      if (!isFav) {
        callApi({
          url: 'favourites',
          method: 'post',
          data: { 'image_id': id, 'sub_id': 'user123' },
        }).then(() => {
          getCatsData();
        });
      } else {
        callApi({
          url: `favourites`,
          key: id,
          method: 'DELETE',
        }).then(() => {
          getCatsData();
        });
      }
    },
    [getCatsData]
  );

  const setLike = useCallback(
    (id, isLike) => {
      callApi({
        url: '/votes',
        method: 'post',
        data: {
          'image_id': `${id}`,
          'sub_id': 'user123',
          'value': isLike,
        },
      }).then(() => {
        getCatsData();
      });
    },
    [getCatsData]
  );

  const onFileChange = (event) => {
    setSelectedFile(event.target.files);
  };

  const uploadImage = useCallback(
    (formData) => {
      callApi({
        url: 'images/upload',
        method: 'post',
        data: formData,
      }).then(() => {
        setSelectedFile(null);
        getCatsData();
      });
    },
    [getCatsData]
  );

  const onFileUpload = () => {
    if (selectedFile?.length) {
      const formData = new FormData();
      formData.append('sub_id', 'user123');
      formData.append('file', selectedFile[0], selectedFile.name);
      uploadImage(formData);
    }
  };

  return (
    <StyledMainPage data-testid="MainPage">
      <Header
        onFileChange={onFileChange}
        onFileUpload={onFileUpload}
        selectedFile={selectedFile}
      />
      <CatList
        images={images}
        favourites={favourites}
        votes={votes}
        setFav={setFav}
        setLike={setLike}
      />
    </StyledMainPage>
  );
};

export default MainPage;
