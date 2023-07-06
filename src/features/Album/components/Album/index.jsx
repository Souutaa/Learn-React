import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

Album.propTypes = {
    album: PropTypes.object.isRequired,
}

function Album(props) {
    const { album } = props;
    return (
        <div className="album">
            <div className='album_thumpnail'>
                <img src={album.thumpnail} alt={album.name} />
            </div>
            <p className='album_title'>{album.title}</p>
        </div>
    )
}

export default Album;
