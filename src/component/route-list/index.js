import { Routes, Route } from 'react-router-dom';
import SearchResultPage from '../../template/search-result-page';
import ListingPage from '../../template/listing-page';

// All Route addition/removal will go in this file
export default function RouteList() {
    return (
        <Routes>
            <Route path='/' element={<ListingPage />} />
            <Route path='/listing' element={<SearchResultPage />} />
        </Routes>
    )
}
