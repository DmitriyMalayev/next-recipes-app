"use client";

import { usePathname } from "next/navigation";
import { Suspense, useEffect } from "react";

function PathnameDebugContent() {
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return null;
}

export default function PathnameDebug() {
  return (
    <Suspense fallback={null}>
      <PathnameDebugContent />
    </Suspense>
  );
}
