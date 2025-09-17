import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { buildApiProtocol } from "../../../store/comunication/api";
import { ApiCallRegulations } from "../../../store/regulation/regulation";
import type { TokenAnalizer } from "../../../store/regulation/resent.regulation";


export function CallOnEnter() {
    const [ok, setOk] = useState<null | boolean>(null);      // null = проверяем
    const navigate = useNavigate();
    const loc = useLocation();

    useEffect(() => {
        let cancelled = false;
        (async () => {
            const res = await buildApiProtocol<TokenAnalizer>(ApiCallRegulations.GUARD);
            if (cancelled) return;
            if (res.ok) { 
                setOk(true);
            } else navigate('/login', { replace: true, state: { from: loc } });
        })();
        return () => { cancelled = true};
    }, [navigate, loc]);

    if (ok === null) return null;
    return <Outlet/>

}
