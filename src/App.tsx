import { Route, Routes } from "react-router"
import { LoginPage } from "./pages/Authentication/Login/Login"
import { RegisterPage } from "./pages/Authentication/Register/Register"
import { CongratPage } from "./pages/Authentication/Congrat/Congrat"
import { ResendPage } from "./pages/Authentication/Resend/Resend"
import { Error500 } from "./pages/Error/500/Error500"
import { DashboardPage } from "./pages/Protected/Dashboard/Dashboard"
import { CallOnEnter } from "./pages/Authentication/Provider/auth.provider"
import { AppLayout } from "./pages/Protected/Layout/Layout"

function App() {

return (
    <>
    <Routes>
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/congrat" element={<CongratPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/resend" element={<ResendPage/>}/>
        <Route element={<CallOnEnter/>}>
            <Route element={<AppLayout/>}>
                <Route path="/" element={<DashboardPage/>}/>    
                <Route path="/dashboard" element={<DashboardPage/>}/>
            </Route>
        </Route>
        <Route path="*" element={<Error500/>} />
    </Routes>
    </>
  )
}

export default App
