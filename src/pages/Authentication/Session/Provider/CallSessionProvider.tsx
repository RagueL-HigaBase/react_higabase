import { useEffect, useState } from "react"
import { buildApiProtocol } from "../../../../store/comunication/api"
import { ApiCallRegulations, type DataBaseProtocol } from "../../../../store/regulation/endpoint.regulation"
import type { PageShowStatus } from "./CallTokenProvider";
import { useNavigate, Outlet } from "react-router-dom";
import { Center, Loader } from "@mantine/core";
import type { SessionRegulation } from "../../../../store/regulation/response.regulation";

export function CallSessionProvider() {
    const [page, setPage] = useState<PageShowStatus>("checking");
    const navigate = useNavigate()
    useEffect(() => {
        (async() => {
            setPage('checking');
            const session:DataBaseProtocol<SessionRegulation> = await buildApiProtocol<SessionRegulation>(ApiCallRegulations.SESSION_POST);
            if (!session.ok) navigate('/verify-session', { replace: true });
            if (session.ok) {
                if (!session.data.isValid) navigate('/verify-session', { replace: true });
                setPage("ok")
            }
        })();
    }, [navigate])

    if (page === "ok") return <Outlet/>
    if (page === "checking") { return <> <Center h={"100vh"}><Loader color="blue"></Loader></Center></> }
}