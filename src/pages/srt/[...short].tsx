import React, { useEffect } from 'react'
import ApiMethods from "@utils/api/api"
import { useRouter } from "next/router"

const RedirectPage: React.FC<any> = ({ res }) => {
    const router = useRouter()
    useEffect(()=>{
        if(res){
            router.push(res.data.link)
        }
    },[res])
    return (
        
        <div>RedirectPage</div>
    )
}

export async function getServerSideProps(ctx:any) {
    const { short } = ctx.query;
    const res = await ApiMethods.getLinkByShort(short[0]);
    if (res.ok){
        return {
            props: {
                res,
            },
        };
    }

}

export default RedirectPage