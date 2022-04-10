import { Routes, Route } from 'react-router-dom';
import ListingPage from '../template/listing-page';
import ResultPage from '../template/result-page';

// All Route addition/removal will go in this file
export default function RouteList() {
    return (
        <Routes>
            <Route path='/' element={<ListingPage />} />
            <Route path='/result' element={<ResultPage />} />
        </Routes>
    )
}
