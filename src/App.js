import {Routes, Route} from 'react-router-dom';
import {publicRoutes} from '~/routes'
import {DefaultLayout } from '~/components/Layout'
import {Fragment} from 'react'
function App() {
  return (
    <div className="App">
       <Routes>
         {
           publicRoutes.map((route,index) => {
             const Layout = route.layout === null ? Fragment : DefaultLayout;
             const Page = route.component
            return <Route key={index} path={route.path}
             element={<Layout><Page /></Layout>} />
           })
         }
       </Routes>
    </div>
  );
}

export default App;
