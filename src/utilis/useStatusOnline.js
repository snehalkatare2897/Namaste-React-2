import { useState,useEffect } from "react";

const useStatusOnline = ()=>{
    [useOnlineStatus,setuseOnlineStatus] = useState(true);
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setuseOnlineStatus(false)
        })

        window.addEventListener("online",()=>{
            setuseOnlineStatus(true)
        })
    },[]);

    return useOnlineStatus
}

export default useStatusOnline