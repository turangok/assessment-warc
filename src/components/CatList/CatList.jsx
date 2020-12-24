import React from 'react';
import { CatCard } from '../CatCard';

import { StyledCatList } from './CatList.style';

export const CatList = ({ images, favourites, votes, setFav, setLike }) => {
  return (
    <StyledCatList data-testid="CatList">
      {images?.map((image) => {
        let likes = 0;
        let dislikes = 0;

        const favId = favourites.find(
          (fav) => fav.image_id === image.id && fav.sub_id === 'user123'
        )?.id;

        const isFav = !!favourites.find(
          (fav) => fav.image_id === image.id && fav.sub_id === 'user123'
        );

        votes.forEach((vote) => {
          vote.image_id === image.id && vote.value === 1 && (likes += 1);
          vote.image_id === image.id && vote.value === 0 && (dislikes += 1);
        });

        return (
          <CatCard
            key={image.id}
            id={image.id}
            imgUrl={image.url}
            isFav={isFav}
            likes={likes}
            dislikes={dislikes}
            setFav={() => setFav(isFav, isFav ? favId : image.id)}
            setLike={setLike}
          />
        );
      })}
    </StyledCatList>
  );
};
