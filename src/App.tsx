import { Route, Routes } from "react-router"
import { LoginPage } from "./pages/Authentication/Login/Login"
import { RegisterPage } from "./pages/Authentication/Register/Register"
import { CongratPage } from "./pages/Authentication/Congrat/Congrat"
import { HomePage } from "./pages/Home/Home"
import { ResendPage } from "./pages/Authentication/Resend/Resend"
import { Error500 } from "./pages/Error/500/Error500"
import { Error404 } from "./pages/Error/400/Error404"

// function SecuredPages() {
//     return <Outlet/>
// }

function App() {

return (
    <>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/congrat" element={<CongratPage/>}/>
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/resend" element={<ResendPage/>}/>
        <Route path="*" element={<Error500/>} /> 
        <Route path="/dashboard" element={<Error404/>}/>
    </Routes>
    </>
  )
}

export default App
