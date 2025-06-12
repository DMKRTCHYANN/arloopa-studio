export default defineNuxtRouteMiddleware((to, from) => {
    const subdomain = useState("subdomain").value; // Get stored subdomain

    if (subdomain !== 'studio') {
        return navigateTo('/auth/login', { redirectCode: 301 });
    }
});
