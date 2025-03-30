"use client";

import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function DarkMode() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const currentTheme = theme === "system" ? resolvedTheme : theme;

    useEffect(() => setMounted(true), []);

    return (
        <div>
            {mounted &&
                (currentTheme === "dark" ? (
                    <MdLightMode
                        onClick={() => setTheme("light")}
                        className="text-3xl cursor-pointer hover:text-amber-500"
                    />
                ) : (
                    <MdDarkMode
                        onClick={() => setTheme("dark")}
                        className="text-3xl cursor-pointer hover:text-amber-500"
                    />
                ))}
        </div>
    );
}
