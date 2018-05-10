import React from 'react'

const UploadedMedia = (props) => (
    <div>
        <h1>Your media</h1>
        <ul>
            {props.media.map(file =>
                <li key={file.id}>{file.name}, {file.size / 1000} KB, Uploaded {file.dateUploaded}</li>
            )}
        </ul>
    </div>
);

export default UploadedMedia;