const reloadLocation = (delay=600) => {
    setTimeout(() => {
        location.reload();
    }, delay);
}

export { reloadLocation };