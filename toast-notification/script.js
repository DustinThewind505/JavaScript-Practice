const toaster = document.getElementById("toaster");
const notificationsContainer = document.getElementById("notifications-container");

function createToast() {
    const toast = document.createElement("div");

    toast.classList.add("toast")

    notificationsContainer.appendChild(toast)

    setTimeout(function() {
        toast.remove();
    }, 3000)
}

toaster.addEventListener("click", function() {
    createToast()
});