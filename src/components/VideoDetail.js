import React from "react";

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading...</div>
    }
    const videosSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div>
            <div className="ui embed">
                <iframe key={video.id.videoId} alt={video.snippet.title} title="video player" src={videosSrc} frameborder="0"></iframe>

            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail
