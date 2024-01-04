export const deleteCookies = () => { 
    document.cookie = "keepLoggedIn=true; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "userName=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "password=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
};