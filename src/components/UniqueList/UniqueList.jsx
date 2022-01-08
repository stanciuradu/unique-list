// componenta care primeste un item unic si il afiseaza pe ecran
import React from 'react';
import UniqueItem from '../UniqueItem/UniqueItem';

function UniqueList(props) {
    const {uniques}=props;
    return (
        <div>
            {
                uniques.map((unique,index)=>{
                    return <UniqueItem
                            text={unique.text}
                            key={index}
                            />
                })
            }
        </div>
    )
}

export default UniqueList;
