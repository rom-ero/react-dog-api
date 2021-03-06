import React from 'react'

export default function BreedButton({ content: breed, onClick }) {
    const { label } = breed

    return (
        <button className="button button--gray button--effect  margin-10" onClick={() => onClick(breed)} key={label}><span>{label}</span></button>
    )
}
