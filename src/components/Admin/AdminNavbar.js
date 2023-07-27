import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

const AdminNavbar = () => {
    const match = useRouteMatch()
    return (
        <>
            {/* Sidebar */}
            <aside className="sm:w-1/5 w-full bg-purple-800 text-white ">
                <div className="sm:p-4 p-2 flex flex-col sm:block ">
                    <h1 className="text-xl font-bold self-end sm:mb-4">Admin Panel</h1>

                    <ul className="flex  overflow-scroll sm:block sm:overflow-visible">
                        <li className="sm:mb-4">
                            <Link to={`${match.url}`} className="block px-4 py-2 rounded hover:bg-purple-700">Dashboard</Link>
                        </li>
                        <li className="sm:mb-4">
                            <Link to={`${match.url}/userManagement`} className="block px-4 py-2 rounded hover:bg-purple-700">User </Link>
                        </li>
                        <li className="sm:mb-4">
                            <Link to={`${match.url}/productManagement`} className="block px-4 py-2 rounded hover:bg-purple-700">Product </Link>
                        </li>
                        <li className="sm:mb-4">
                            <Link to={`${match.url}/orderManagement`} className="block px-4 py-2 rounded hover:bg-purple-700">Order </Link>
                        </li>
                        <li className="sm:mb-4">
                            <Link to={`/`} className="flex items-center px-2 py-2 rounded hover:bg-purple-700">

                                <svg className='fill-white w-8' viewBox="0 0 24 24">
                                    <path d="M14 7l-5 5 5 5V7z" />
                                </svg>
                                <p>Back</p>
                            </Link>
                        </li>
                        {/* Add more relevant links as needed */}
                    </ul>

                </div>
            </aside>
        </>
    )
}

export default AdminNavbar
