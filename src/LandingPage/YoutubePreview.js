const Preview = () => {
    return (
        <div className="video-section">
            <div className="mean-streak-column">
                <h1>Mean Streak Pulling</h1>
            </div>
            <div className="video-column">
                <div className="video-container">
                    <iframe
                        src="https://www.youtube.com/embed/sbD2sm3aIiU"
                        title="International 966 “Mean Streak” - MMTTPA 9500 lb. Pro Field California, MO"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen=""
                        className="video-preview"
                    />
                </div>
            </div>
        </div>
    );
};

export default Preview;
