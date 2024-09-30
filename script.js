function revealGift(giftId) {
    // Hide all gifts first
    const gifts = document.querySelectorAll('.hidden-gift');
    gifts.forEach(gift => {
        gift.style.display = 'none';
    });

    // Reveal the clicked gift
    const selectedGift = document.getElementById(giftId);
    selectedGift.style.display = 'block';
}
