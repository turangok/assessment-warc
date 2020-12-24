import React from 'react';
import { render } from '@testing-library/react';
import { CatCard } from '.';


describe('<CatCard />', () => {

    test('should render without props (Empty) and unfavourited', () => {
        const dataId = 'CatCard';
        const notFavourited = "emptyHeart"

        const { getByTestId } = render(<CatCard />);
        expect(getByTestId(dataId)).toBeInTheDocument();
        expect(getByTestId(notFavourited)).toBeInTheDocument();
    });

    test('should render with likes, dislikes, image and favourite prop', () => {
        const likes = 123;
        const dislikes = 456;
        const favourited = "solidHeart"
        const { getByText, getByTestId } = render(<CatCard
            imgUrl='https://cdn2.thecatapi.com/images/394.jpg'
            isFav={true}
            likes={likes}
            dislikes={dislikes}
        />);
        expect(getByText(likes)).toBeInTheDocument();
        expect(getByText(dislikes)).toBeInTheDocument();
        expect(getByTestId(favourited)).toBeInTheDocument();
    });

})


