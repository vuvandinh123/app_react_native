import { useRef } from "react";

export function useToTop() {
    const topRef =useRef(null)
    topRef.current?.scrollTo({ x: 0, y: 0, animated: true });
    return topRef
}