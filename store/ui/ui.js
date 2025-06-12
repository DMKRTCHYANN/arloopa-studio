import { defineStore } from 'pinia'

export const useUiStore = defineStore('uiStore', () => {
    const isMobileMenuOpened = ref(false)
    const isMobileProfileMenuOpened = ref(false)

    async function toggleMobileMenu() {
        isMobileMenuOpened.value = !isMobileMenuOpened.value
    }

    async function toggleMobileProfileMenu() {
        isMobileProfileMenuOpened.value = !isMobileProfileMenuOpened.value
    }

    return { isMobileMenuOpened, isMobileProfileMenuOpened, toggleMobileMenu, toggleMobileProfileMenu }
})
