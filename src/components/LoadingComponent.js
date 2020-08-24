import React from 'react'
import HashLoader from "react-spinners/HashLoader";

export default function LoadingComponent(Component) {
    return function WhileLoadingComponent({isLoading, ...props}){
        if(!isLoading) return <Component {...props} />;
        return (
            <HashLoader
                color={'#fff'}
                css={`
                margin: 0 auto;
                `}
            >
            </HashLoader>
        )
    }
}
