import { useEffect } from "react";

export default function(ref, fun){
    useEffect(()=>{
        let click = (e)=>{
            if(!ref.current || ref.current.contains(e.target)){
                return false;
            }
            fun()
        }
        document.addEventListener("mousedown", click)
        document.addEventListener("touchstart", click)

        return()=>{
            document.addEventListener("mouse down", click)
            document.addEventListener("touchstart", click)
        }
    })
}