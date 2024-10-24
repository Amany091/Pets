import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AdoptedPetContext from './context/adoptedPetContect.ts';
import { useState } from 'react';
import { lazy, Suspense } from 'react';
import Loader from './components/Loader.tsx';
import { Pet } from './types/common.tsx';

const SearchParams = lazy(()=> import("./pages/SearchParams.tsx"))
const Details = lazy(()=> import("./pages/Details.tsx"))
const NotFound = lazy(() => import("./pages/Error.tsx"));

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity, // the cache will always return the cached data , even if it's outdated
        // cacheTime : Infinity // the cache will store the data until is manually cleared or the application is restarted
      }
    }
  })

  const adoptedPet = useState<Pet | null>(null)

  return (
    <BrowserRouter>
      <AdoptedPetContext.Provider value={adoptedPet}  >
      <QueryClientProvider client={queryClient} >
          <Suspense fallback={<div className='loader-spinner' ><Loader/></div>}>
            <div className="App">
            <Routes>
              <Route path='/notFound' element={<NotFound />} />
              <Route path='/' element={ <SearchParams /> } />
              <Route path='/details/:id' element={ <Details /> } />
            </Routes>
            </div>
        </Suspense>
        </QueryClientProvider>
      </AdoptedPetContext.Provider>
    </BrowserRouter>
  );
}

export default App;
