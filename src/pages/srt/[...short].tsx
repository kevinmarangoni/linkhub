import React, { useEffect } from 'react'
import ApiMethods from "@utils/api/api"
import { useRouter } from "next/router"

const RedirectPage: React.FC<any> = ({ link }) => {
    const router = useRouter()
    useEffect(()=>{
        if(link.length > 0){
            router.push(link)
        }
    },[link])
    return (
        
        <div>RedirectPage</div>
    )
}

export async function getServerSideProps(ctx:any) {
    const { short } = ctx.params;
    const data = short[0]
    const res = await ApiMethods.getLinkByShort(data);
    if (res.ok){
        const link = encodeURI(res.data.link)
        return {
            props: {
                link,
            },
        };
    }
}

export default RedirectPage