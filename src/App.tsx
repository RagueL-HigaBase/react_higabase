import { Route, Routes } from "react-router"
import { LoginPage } from "./pages/Authentication/Login/Login"
import { RegisterPage } from "./pages/Authentication/Register/Register"
import { CongratPage } from "./pages/Authentication/Congrat/Congrat"
import { ResendPage } from "./pages/Authentication/Resend/Resend"
import { Error500 } from "./pages/Error/500/Error500"
import { DashboardPage } from "./pages/Protected/Dashboard/Dashboard"
import { CallTokenOnEnter } from "./pages/Authentication/Provider/Token/token.provider"
import { AppLayout } from "./pages/Protected/Layout/Layout"
import { ProfilePage } from "./pages/Protected/Profile/Profile"
import { Error403 } from "./pages/Error/403/Error403"
import { CallSessionProvider } from "./pages/Authentication/Provider/Session/session.provider"
import { PinLoginPage } from "./pages/Authentication/Login/Pin/Pin"
import { MockLoginPage } from "./pages/Mock/Login/Login"
import { PinConfirmPage } from "./pages/Authentication/Provider/Session/Pin"

function App() {

return (
    <>
    <Routes>
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/congrat" element={<CongratPage/>}/>
        <Route element={<CallSessionProvider/>}>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/session" element={<PinLoginPage/>}/>
            <Route path='/session-check' element={<PinConfirmPage/>}/>
        </Route>
        <Route path="/resend" element={<ResendPage/>}/>
            <Route element={<CallTokenOnEnter/>}>
                    <Route element={<AppLayout/>}>
                        <Route path="/" element={<DashboardPage/>}/>    
                        <Route path="/dashboard" element={<DashboardPage/>}/>
                        <Route path="/profile" element={<ProfilePage/>}/>
                    </Route>
            </Route>
        <Route path="/400" element={<Error500/>}/>
        <Route path="/403" element={<Error403/>} />
        <Route path="*" element={<Error500/>}/>
        <Route path="moklogin" element={<MockLoginPage/>}/>
    </Routes>
    </>
  )
}

export default App
