import React from 'react'

export default function LoadingComponent(Component) {
    return function WhileLoadingComponent({isLoading, ...props}){
        if(!isLoading) return <Component {...props} />;
        return (
            <p>
                Wczytywanko...
            </p>
        )
    }
}
