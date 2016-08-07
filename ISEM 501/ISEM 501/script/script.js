function navigate(where) {
    if (where == "aboutus")
        $('.content').load("AboutUs.html");
    else if (where == "contactus")
        $('.content').load("ContactUs.html");
    else if (where == "careers")
        $('.content').load("Careers.html");
    else if (where == "services")
        $('.content').load("Services.html");
    else if (where == "sitemap")
        $('.content').load("Sitemap.html");
    else if (where == "itstaffing")
        $('.content').load("ITStaffingServices.html");
    else if (where == "home")
        window.location.href = "Home.html";

}