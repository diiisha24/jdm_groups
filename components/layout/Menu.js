"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Default menu data as fallback
const defaultMenuItems = [
  {
    title: "Home",
    href: "/",
    submenu: null,
  },
  {
    title: "About Us",
    href: "/about",
    submenu: null,
  },
  {
    title: "Services",
    href: "/service",
    submenu: [
      { title: "All Services", href: "/service" },
      { title: "Air Freight", href: "/service-details/air-freight" },
      { title: "Ocean Freight", href: "/service-details/ocean-freight" },
      { title: "Train Freight", href: "/service-details/train-freight" },
      { title: "Road Transportation", href: "/service-details/road-transportation" },
      { title: "Custom Brokerage", href: "/service-details/custom-clearance" },
      { title: "Courier Services", href: "/service-details/courier-services" },
      { title: "Project Cargo", href: "/service-details/project-cargo" },
      { title: "Warehousing", href: "/service-details/warehousing" },
      { title: "Other Services", href: "/other-services" },
    ]
  },
  {
    title: "Gallery",
    href: "/gallery",
    submenu: null,
  },
  {
    title: "Careers",
    href: "/careers",
    submenu: null,
  },
  {
    title: "Blogs",
    href: "/news",
    submenu: [
      { title: "All Blogs", href: "news-grid" },
    ],
  },
  {
    title: "Contact Us",
    href: "/contact",
    submenu: null,
  },
];

export default function Menu() {
  const [menuItems, setMenuItems] = useState(defaultMenuItems);
  const pathname = usePathname();

  // Fetch menu data from API on mount
  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const fetchMenuData = async () => {
      try {
        const response = await fetch(`${apiUrl}/home/api/menu/`);
        const data = await response.json();
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
      }
    };

    fetchMenuData();
  }, []);

  // Helper to check if a menu item or its submenu is active
  const isActive = (href, submenu) => {
    if (pathname === href) return true;
    if (submenu) {
      return submenu.some((sub) => pathname.startsWith(sub.href));
    }
    return false;
  };

  return (
    <nav id="mobile-menu" className="d-none d-xl-block">
      <ul>
        {menuItems.map((item, index) => {
          const active = isActive(item.href, item.submenu);
          return (
            <li
              key={index}
              className={`${
                item.submenu ? "has-dropdown" : ""
              }${active ? " active theme-highlight" : ""}`}
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
          );
        })}
      </ul>
    </nav>
  );
}
