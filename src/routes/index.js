
import {QueryClientProvider,QueryClient} from 'react-query';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import AuthContextProvider from '../common/contexts/AuthContext';
import Login from "./Login";

const queryClient = new QueryClient({
    defaultOptions: {
        queries:{
            refetchOnWindowFocus: false,
            retry: 1
        }
    }
}) 
const App=()=> {
    return (
        <AuthContextProvider>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                <Routes>
                <Route path="/login" element={<Login/>}/>
                </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </AuthContextProvider>)
}
export default App;