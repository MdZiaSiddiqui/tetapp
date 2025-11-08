'use client';

import { useEffect } from "react";

const DEMO_COOKIE = "supacharge-demo-access";

const DemoCookieSetter = () => {
  useEffect(() => {
    const maxAge = 60 * 60; // 1 hour
    document.cookie = `${DEMO_COOKIE}=1; path=/; max-age=${maxAge}; SameSite=Lax`;
  }, []);

  return null;
};

export default DemoCookieSetter;
