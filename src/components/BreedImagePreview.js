import React, { useEffect } from 'react'
import { getSingleRandomImage } from "../api/breeds";
import useApi from "../hooks/useApi";
import loader from '../img/dog_white_big.png';

export default function BreedImagePreview({ content: { label, breed, subBreed } = {} }) {

    const { data, error, loading, request } = useApi(getSingleRandomImage);
    const url = breed + (subBreed ? ('/' + subBreed) : '')

    useEffect(() => {
        request(url)
    }, [request, url]);

    return (
        <div className='preview-conainer'>
            <h1 className='preview-container__header'>Breed: {label}  </h1>
            <div className='preview-container__image'>
                {loading ? <img src={loader} alt="Loading..." className='loader' /> : data ? <img className='preview-container__image-breed' src={data?.message} alt={label} /> : ''}
                {error && <p>{error}</p>}
            </div>
            <div className='preview-container__actions'>
                <button className="button button--white" onClick={() => request(url)}>
                    <span>Next image</span>
                </button>
            </div>


        </div>
    )
}
