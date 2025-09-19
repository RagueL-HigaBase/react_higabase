import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { buildApiProtocol } from "../../../../store/comunication/api";
import { ApiCallRegulations, type DataBaseProtocol } from "../../../../store/regulation/endpoint.regulation";
import { Center, Loader } from "@mantine/core";
import type { TokenRegulation } from "../../../../store/regulation/response.regulation";

export type PageShowStatus = "checking" | "ok";

export function CallTokenProvider() {
    const [page, setPage] = useState<PageShowStatus>("checking");
    const navigate = useNavigate();
    useEffect(() => {
        (async() => {
            setPage("checking");
            const token: DataBaseProtocol<TokenRegulation> = await buildApiProtocol<TokenRegulation>(ApiCallRegulations.TOKEN_GUARD);
            if (!token.ok) {
                navigate('/login', { replace: true }); 
                setPage("ok");
            }
            if (token.ok) navigate('/', { replace: true });
        })();
    }, [navigate]);
    if (page === "ok") return <Outlet/>
    if (page === "checking") { return <> <Center h={"100vh"}><Loader color="blue"></Loader></Center></> }
}