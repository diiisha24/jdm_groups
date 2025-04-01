"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

// Default menu data as fallback
const defaultMenuItems = [
  {
    title: "Home",
    href: "/",
    submenu: null, // No submenu in current structure, but preserved for commented-out section
  },
  {
    title: "About Us",
    href: "about",
    submenu: null,
  },
  {
    title: "Careers",
    href: "careers",
    submenu: null,
  },
  {
    title: "Services",
    href: "service-details",
    submenu: [
      { title: "All Services", href: "service" },
      { title: "Air Freight", href: "service-details" },
      { title: "Ocean Freight", href: "service-details" },
      { title: "Contract Freight", href: "service-details" },
      { title: "Learning", href: "service-details" },
      { title: "Road Services", href: "service-details" },
    ],
  },
  {
    title: "Blogs",
    href: "news",
    submenu: [
      { title: "All Blogs", href: "news-grid" },
    ],
  },
  {
    title: "Contact Us",
    href: "contact",
    submenu: null,
  },
];

export default function Menu() {
  const [menuItems, setMenuItems] = useState(defaultMenuItems); // Initialize with default menu items

  // Fetch menu data from API on mount
  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const fetchMenuData = async () => {
      try {
        const response = await fetch(`${apiUrl}/home/api/menu/`); // Hypothetical endpoint
        const data = await response.json();
        // Assuming the API returns an array of objects with title, href, and optional submenu
        if (data && Array.isArray(data) && data.length > 0) {
          const fetchedMenuItems = data.map((item) => ({
            title: item.title || "Untitled",
            href: item.href || item.url || "#",
            submenu: item.submenu
              ? item.submenu.map((subItem) => ({
                  title: subItem.title || "Untitled",
                  href: subItem.href || subItem.url || "#",
                }))
              : null,
          }));
          setMenuItems(fetchedMenuItems);
        }
      } catch (error) {
        console.error("Error fetching menu data:", error);
        // Fallback to defaultMenuItems (already set)
      }
    };

    fetchMenuData();
  }, []); // Runs once on mount

  return (
    <>
      <nav id="mobile-menu" className="d-none d-xl-block">
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
            //   className={item.submenu ? "has-dropdown" : ""}
              // Add 'active' class to Home as in original, assuming first item is Home
              className={
                item.submenu
                  ? "has-dropdown"
                  : "" + (index === 0 ? " active menu-thumb" : "")
              }
            >
              <Link href={item.href}>
                {item.title}
                {item.submenu && <i className="fa-regular fa-plus" />}
              </Link>
              {item.submenu && (
                <ul className="submenu">
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link href={subItem.href}>{subItem.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}