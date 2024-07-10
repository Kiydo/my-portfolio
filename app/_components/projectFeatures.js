import React from 'react';
import Image from 'next/image';

export default function ProjectFeatures({ items, renderItem, itemName }) {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {items.map((item, index) => (
                <div key={index} className='flex flex-col items-center my-2 p-2'>
                    {renderItem(item)}
                    <p className='mt-2 text-center'>{itemName}</p>
                </div>
            ))}
        </div>
    );
}