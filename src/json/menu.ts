interface Menu {
    name: string;
    slug: string;
    url: string;
    target: string
}

export const menu: Menu[] = [
    {
        name: "Home",
        slug: "home",
        url: "/",
        target: "_self"
    },
    {
        name: "About",
        slug: "about",
        url: "/about",
        target: "_self"
    },
    {
        name: "Project",
        slug: "project",
        url: "/#project",
        target: "_self"
    },
    {
        name: "Blog",
        slug: "blog",
        url: "https://blog.riyanpurba.com/",
        target: "_blank"
    },
    {
        name: "Contact",
        slug: "contact",
        url: "/#contact",
        target: "_self"
    },
]