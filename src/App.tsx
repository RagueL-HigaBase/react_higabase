import { Route, Routes } from "react-router"
import { LoginPage } from "./pages/Authentication/Login/Login"
import { RegisterPage } from "./pages/Authentication/Register/Register"

function App() {

return (
    <>
    <Routes>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="register" element={<RegisterPage/>} />
    </Routes>
    </>
  )
}

export default App
