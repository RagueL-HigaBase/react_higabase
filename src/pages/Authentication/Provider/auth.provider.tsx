// CallOnEnter.tsx
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { buildApiProtocol } from "../../../store/comunication/api";
import { ApiCallRegulations } from "../../../store/regulation/regulation";
import type { TokenAnalizer } from "../../../store/regulation/resent.regulation";

export function CallOnEnter() {
    const navigate = useNavigate();
    useEffect(() => {
        
    ( async () => {
        const res = await buildApiProtocol<TokenAnalizer>(ApiCallRegulations.GUARD);
        if(!res.ok) {
            navigate('/login')
        }
    })();

    });   
    return <Outlet />;          
}
