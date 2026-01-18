import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import Home from './components/Home.tsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import Contact from './components/Contact.tsx'
import About from './components/About.tsx'
import Layout from './Layout.tsx'
import ErrorPage from './components/ErrorPage.tsx'
import User from './components/User.tsx'
import Github from './components/Github.tsx'
import { githubInfoLoader } from './utils/FetchGithubUser.tsx'



// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//       element: <Home />
//       },
//       {
//         path: '/about',
//         element: <About />
//       },
//       {
//         path: '/contact',
//         element: <Contact />
//       },
//     ],
//     errorElement: <ErrorPage />
//   }
// ]) 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} errorElement={<ErrorPage />}>
      <Route path='/' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='user/:id' element={<User />}/>
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
