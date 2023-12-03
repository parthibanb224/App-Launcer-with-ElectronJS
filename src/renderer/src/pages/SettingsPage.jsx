import React from 'react';
import { useData } from '../context/DataContext';

const SettingsPage = () => {
    const { applicationsLists,
        showAddForm,
        setShowAddForm,
        showEditForm,
        newApplicationInfo,
        cancelEditApplication,
        saveEditApplication,
        editApplicationHandler,
        handleEditInputChange,
        handleFileChange,
        addApplicationWithInfo,
        handleApplication, } = useData();

    return (
        <div className="container mx-auto mt-24 p-8 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-5">Settings Page</h1>

            {showAddForm && (
                <form onSubmit={addApplicationWithInfo}>
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-4">Add Application</h2>
                            {/* Input fields for the new application */}
                            <label className="block text-sm font-semibold mb-2">Application Name</label>
                            <input
                                type="text"
                                placeholder='Google'
                                onChange={(e) => handleEditInputChange(e, 'name')}
                                className="mb-4 border border-gray-400 ps-1"
                                required
                            />
                            <label className="block text-sm font-semibold mb-2">Image</label>
                            <input
                                type="text"
                                placeholder='https://www.google-image.png'
                                onChange={(e) => handleEditInputChange(e, 'icons')}
                                className="mb-4 border border-gray-400 ps-1"
                            />
                            <label className="block text-sm font-semibold mb-2">Parameter</label>
                            <input
                                type="text"
                                placeholder='https://www.google.com'
                                onChange={(e) => handleEditInputChange(e, 'parameter')}
                                className="mb-4 border border-gray-400 ps-1"
                            />

                            <div className="flex justify-end">
                                <button className="text-red-500 hover:text-red-700" onClick={() => setShowAddForm(false)}>Cancel</button>
                                <button type='submit' className="ml-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">Save</button>
                            </div>
                        </div>
                    </div>
                </form>
            )}

            {showEditForm && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Edit Application</h2>

                        <label className="block text-sm font-semibold mb-2">Edit Application Name</label>
                        <input
                            type="text"
                            value={newApplicationInfo.name}
                            onChange={(e) => handleEditInputChange(e, 'name')}
                            className="mb-4"
                            disabled
                        />

                        <label className="block text-sm font-semibold mb-2">Edit Application Image</label>
                        <input
                            type="text"
                            value={newApplicationInfo.icons}
                            onChange={(e) => handleEditInputChange(e, 'icons')}
                            className="mb-4"
                            disabled
                        />

                        <label className="block text-sm font-semibold mb-2">Edit Application Parameters</label>
                        <input
                            type="text"
                            value={newApplicationInfo.parameter}
                            onChange={(e) => handleEditInputChange(e, 'parameter')}
                            className="mb-4"
                        />

                        <div className="flex justify-end">
                            <button className="text-red-500 hover:text-red-700" onClick={cancelEditApplication}>
                                Cancel
                            </button>
                            <button
                                className="ml-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
                                onClick={saveEditApplication}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* ... (your existing table rendering logic) */}
            <div className="mb-4 px-20">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mb-4 float-right" onClick={() => setShowAddForm(true)}>Add New Application</button>
                <table className="w-full border">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="py-2">Name</th>
                            <th className="py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applicationsLists.map((app, index) => (
                            <tr key={index} className={(index % 2 === 0) ? 'bg-gray-100' : ''}>
                                <td className="py-2 text-center">{app.name}</td>
                                <td className="py-2 flex justify-around">
                                    <button className="text-blue-500 hover:text-blue-700" onClick={() => editApplicationHandler(app)}>Edit</button>
                                    {app.loading === "true" ?
                                        <button className="ml-2 text-red-500 hover:text-red-700" onClick={() => handleApplication(app)}>Remove Application</button> :
                                        <button className="ml-2 text-green-500 hover:text-green-700" onClick={() => handleApplication(app)}>Add Application</button>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SettingsPage;
