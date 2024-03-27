document.addEventListener('DOMContentLoaded', function() {
    const historyItemsWrapper = document.getElementById('history-items-wrapper');
    const clearHistoryBtn = document.getElementById('clear-history');

    function displayHistoryItems() {
        const historyItems = JSON.parse(localStorage.getItem('historyItems')) || [];
        historyItems.forEach(item => {
            const itemHTML = `
                <div class="col-md-12">
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-2">
                                <img src="${item.imageUrl}" class="img-fluid rounded-start" alt="${item.name}">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${item.name}</h5>
                                    <p class="card-text">Total Price: ₱${item.totalPrice}</p>
                                    <p class="card-text">Quantity: ${item.quantity}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            historyItemsWrapper.innerHTML += itemHTML;
        });
    }

    displayHistoryItems();

    clearHistoryBtn.addEventListener('click', function() {
        clearHistory();
    });

    function clearHistory() {
        localStorage.removeItem('historyItems');
        historyItemsWrapper.innerHTML = ''; // Clear displayed items
    }
});
