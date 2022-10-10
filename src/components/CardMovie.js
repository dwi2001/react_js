import React from "react";


const CardMovie = (props) => {

    return (
        <div style={{ height: '100%' }}>
            <div style={{ border: '1px solid', padding: '100px', backgroundColor: '#F5F5DC' }}>
                <div style={{}}>
                    <img src={'https://image.tmdb.org/t/p/w500' + props.data.backdrop_path} style={{ height: 100, width: 100 }} />
                    <h1>
                        {props.data.title}
                    </h1>
                    <p style={{}}>
                        {props.data.overview}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default CardMovie