import { defineStore } from 'pinia'

export const useCreditCardsStore = defineStore('creditCardsStore', () => {
    const creditCards = ref([])
    const newCard = ref(true)
    const loading = ref(true)

    async function fetchCreditCards() {
        loading.value = true

        const {data} = await useAuthFetch('/api/billable/stripe-credit-cards')

        if (data.value.error === false) {
            creditCards.value = data.value.data.credit_cards
        }

        loading.value = false
    }

    function setNewCard(isNewCard) {
        newCard.value = isNewCard
    }

    function reset () {
        creditCards.value = []
    }

    return { creditCards, newCard, loading, fetchCreditCards, setNewCard, reset }
})

