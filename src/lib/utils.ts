import { twMerge } from "tailwind-merge";
import {clsx, type ClassValue} from "clsx"

export function cn(...inputs: ClassValue[]){
    return twMerge(clsx(inputs))
}
export function wait(){
    const delay = 1000;
    return new Promise((resolve)=> setTimeout(resolve, delay))
}