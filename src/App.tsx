import { Route, Routes } from "react-router"
import { LoginPage } from "./pages/Authentication/Login/Login"
import { RegisterPage } from "./pages/Authentication/Register/Register"
import { CongratPage } from "./pages/Authentication/Congrat/Congrat"
import { ResendPage } from "./pages/Authentication/Resend/Resend"
import { Error500 } from "./pages/Error/500/Error500"
import { DashboardPage } from "./pages/Protected/Dashboard/Dashboard"
import { AppLayout } from "./pages/Protected/Layout/Layout"
import { ProfilePage } from "./pages/Protected/Profile/Profile"
import { Error403 } from "./pages/Error/403/Error403"
import { CallTokenProvider } from "./pages/Authentication/Session/Provider/CallTokenProvider"
import { BuilsSessionPage } from "./pages/Authentication/Session/Build/BuildSession"
import { VeryfySessionPage } from "./pages/Authentication/Session/Verify/SessionVerify"
import { CallSessionProvider } from "./pages/Authentication/Session/Provider/CallSessionProvider"
import { MockPage } from "./pages/Mock/Mock"
import { MainPage } from "./pages/Public/Main/Main"
import { HomePage } from "./pages/Home/Home"

function App() {

return (
    <>
    <Routes>
        <Route path="main" element={<MainPage/>}/>
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/congrat" element={<CongratPage/>}/>
        <Route path="/resend" element={<ResendPage/>}/>
        <Route element={<CallTokenProvider/>}>
            <Route path="/login" element={<LoginPage/>}/>
        </Route>
        <Route element={<CallSessionProvider/>}>
            <Route element={<AppLayout/>}>
                <Route path="/" element={<HomePage/>}/>    
                <Route path="/dashboard" element={<DashboardPage/>}/>
                <Route path="/profile" element={<ProfilePage/>}/>
            </Route>
        </Route>
        <Route path="/verify-session" element={<VeryfySessionPage/>}/>
        <Route path='/build-session' element={<BuilsSessionPage/>}/>
        <Route path="/400" element={<Error500/>}/>
        <Route path="/403" element={<Error403/>} />
        <Route path="*" element={<Error500/>}/>
        <Route path="mock" element={<MockPage/>}/>
    </Routes>
    </>
  )
}

export default App
