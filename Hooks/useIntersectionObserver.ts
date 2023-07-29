import { useEffect, useState } from "react";

//-82px of rootMargin is the default value because it will be used mainly for the navbar
export default function useIntersectionObserver(ref, options = {rootMargin: "-82px"}) {
    const [isIntersecting, setIsIntersecting] = useState(false);
  
    useEffect(() => {
      const isAndroid = navigator.userAgent.toLowerCase().includes("android");
      const isFirefox = navigator.userAgent.toLowerCase().includes("firefox");
      if(isAndroid && isFirefox ){
        options = {rootMargin: "-90px"}
      }
      const div = ref.current;
      const observer = new IntersectionObserver(entries => {
        const entry = entries[0];
        setIsIntersecting(entry.isIntersecting);
      },options);
      observer.observe(div);
      return () => {
        observer.disconnect();
      }
    }, [ref]);
  
    return isIntersecting;
  }