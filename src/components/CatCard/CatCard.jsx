import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThumbsUp,
  faThumbsDown,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

import { StyledCatCard, StyledCatCardIcons, StyledIcon } from './CatCard.style';

export const CatCard = ({
  id,
  imgUrl,
  isFav,
  likes,
  dislikes,
  setFav,
  setLike,
}) => {
  return (
    <StyledCatCard className="card" data-testid="CatCard">
      <img className="card-img-top" src={imgUrl} alt="Card cap" />
      <div className="card-body">
        <p className="card-text">{`Cat score: ${likes - dislikes}`} </p>
        <StyledCatCardIcons>
          <StyledIcon>
            <span>{likes}</span>
            <FontAwesomeIcon
              icon={faThumbsUp}
              color="#3586FF"
              onClick={() => setLike(id, 1)}
            />
          </StyledIcon>
          <StyledIcon>
            <span>{dislikes}</span>
            <FontAwesomeIcon
              icon={faThumbsDown}
              color="#3586FF"
              onClick={() => setLike(id, 0)}
            />
          </StyledIcon>
          <StyledIcon>
            {isFav ? (
              <FontAwesomeIcon
                icon={faHeart}
                color="red"
                onClick={setFav}
                data-testid="solidHeart"
              />
            ) : (
              <FontAwesomeIcon
                icon={farHeart}
                color="red"
                onClick={setFav}
                data-testid="emptyHeart"
              />
            )}
          </StyledIcon>
        </StyledCatCardIcons>
      </div>
    </StyledCatCard>
  );
};
