import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { useData } from '../context/DataContext';

const HomeScreen = () => {
    const { applications } = useData();
    const [showWebApp, setShowWebApp] = useState(false)

    function openCoderJeet(url) {
        window.indexBridge.openCoderJeet(url);
    }
    
    function loadExplorer() {
        window.indexBridge.loadExplorer();
    }

    return (
        <div className="flex flex-col lg:flex-row min-h-screen mt-24">
            <div className="flex-grow bg-white p-4 lg:p-8 overflow-y-auto">
                
                {/* <button id="loadExplorer" onClick={loadExplorer}>Load Windows Explorer</button> */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {applications?.map((app, index) => (
                        <button key={index} onClick={() => openCoderJeet(app.parameter)} className="bg-gray-200 rounded-xl w-56 mx-auto">
                            {/* <img
                                src={app.icons}
                                alt={`${app.name} icon`}
                                className="w-full h-36 mb-1 mx-auto p-3 object-contain"
                            /> */}
                            <div>
                                {app.icons}
                            </div>
                            <span className="text-center block font-semibold mb-2">{app.name}</span>
                        </button>
                    ))}
                </div>
            </div>

            {showWebApp && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-lg">
                        <button
                            onClick={closeWebApp}
                            className="absolute top-0 right-0 m-2 bg-red-500 text-white px-2 py-1 rounded"
                        >
                            Close
                        </button>
                        <ReactPlayer
                            url="your_media_url_here"
                            controls
                            width="100%"
                            height="100%"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomeScreen;
