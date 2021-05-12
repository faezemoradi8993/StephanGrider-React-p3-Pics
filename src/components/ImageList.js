import React from 'react';
const ImageList = (props) => {

    const images = props.images.map((x) => {
        console.log(x.id);

        return <img key={x.id} alt="" src={x.urls.raw} style={{ width: '300px', height: '300px' }} />
    });
    return (
        <div >
            {images}
        </div>
    );
}


export default ImageList;