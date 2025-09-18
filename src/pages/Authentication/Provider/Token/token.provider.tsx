import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { buildApiProtocol } from "../../../../store/comunication/api";
import { ApiCallRegulations } from "../../../../store/regulation/regulation";
import type { TokenAnalizer } from "../../../../store/regulation/resent.regulation";


export function CallTokenOnEnter() {
    const [ok, setOk] = useState<null | boolean>(null);
    const navigate = useNavigate();
    const loc = useLocation();

    useEffect(() => {
        let cancelled = false;
        (async () => {
            const res = await buildApiProtocol<TokenAnalizer>(ApiCallRegulations.TOKEN_GUARD);
            if (cancelled) return;
            if (res.ok) { 
                setOk(true);
            } else navigate('/setpin', { replace: true, state: { from: loc } });
        })();
        return () => { cancelled = true};
    }, [navigate, loc]);

    if (ok === null) return null;
    return <Outlet/>

}
