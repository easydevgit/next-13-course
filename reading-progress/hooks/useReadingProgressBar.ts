import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function useReadingProgressBar() {
  const [completion, setCompletion] = useState(0);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const updateScrollCompletion = () => {
      const actualPosition = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      const percentage = (actualPosition / scrollHeight) * 100;
      setCompletion(percentage);
    };

    window.addEventListener("scroll", updateScrollCompletion);

    return () => {
      window.removeEventListener("scroll", updateScrollCompletion);
    };
  }, [pathname, searchParams]);

  return completion;
}
