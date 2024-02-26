"use client"

import { useEffect } from "react";
import { getSessionStatus } from "./utils/session";
import { redirect } from "next/navigation";

export default function withAuth(Component:any){
    return function WithAuth(props:any){

        const session = getSessionStatus();
        useEffect(()=>{
            if(!session){
                redirect("/");
            }
        }, [session]);

        if(!session){
            return null;
        }

        return <Component {...props}/>;
    }
}