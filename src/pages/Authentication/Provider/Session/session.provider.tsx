import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { buildApiProtocol } from "../../../../store/comunication/api";
import { ApiCallRegulations } from "../../../../store/regulation/regulation";
import { Center, Loader } from "@mantine/core";
import type { SessionRegulation } from "../../../../store/regulation/session.regulation";

export type PageShowStatus = "checking" | "loading" | "death" | "ok";

export function CallSessionProvider() {
    const [page, setPage] = useState<PageShowStatus>("checking");
    const navigate = useNavigate();

    useEffect(() => {
        (async() => {
            const token = await buildApiProtocol<SessionRegulation>(ApiCallRegulations.TOKEN_GUARD);
            if (!token.ok) navigate('/moklogin', { replace: true, state: { message: token.message } });
            const session = await buildApiProtocol(ApiCallRegulations.SESSION_GET);
            console.log(session)
            if (!session.ok) navigate('/session-check' , { replace: true });
            if (session.ok) setPage("ok");
        })();
    }, [navigate]);
    if (page === "checking") { return <> <Center h={"100vh"}><Loader color="blue"></Loader></Center></> }
    if (page === "ok") return <Outlet/>
}