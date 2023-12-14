const Preview = () => {
    return (
        <div>
            <h1 className="mean-streak-column">Mean Streak Pulling</h1>
            <div className="video-section">
                <div className="video-column">
                    <div className="video-container">
                        <ul className="youtube-list">
                            <li>
                                Like Tractor Pulling? Then we have you covered. We not only specialize in beef production but also actively participate in Pro-Stock Tractor Pulls across the Midwest. Having finished 2nd place overall in the 2022 9500 lbs. class, we are gearing up for the upcoming 2024 season. Check us out on YouTube, and stay tuned for updates on when and where you can see us live in action!</li>
                        </ul>
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
        </div>
    );
};

export default Preview;
