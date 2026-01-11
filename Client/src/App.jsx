import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/404"
import Login from "./pages/Login"
import Signup from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import Layout from "./pages/Layout"
import ResumeBuilder from "./pages/ResumeBuilder"
import ResumeView from "./pages/ResumeView"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/app" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="builder/:resumeId" element={<ResumeBuilder />} />
      </Route>

      <Route path="view/:resumeId" element={<ResumeView />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
