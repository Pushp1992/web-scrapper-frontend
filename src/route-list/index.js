import { Routes, Route } from 'react-router-dom';
import ListingPage from '../template/listing-page';

// All Route addition/removal will go in this file
export default function RouteList() {
    return (
        <Routes>
            <Route path='/' element={<ListingPage />} />
        </Routes>
    )
}
