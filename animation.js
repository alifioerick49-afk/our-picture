document.addEventListener("DOMContentLoaded", function () {
    const photos = document.querySelectorAll(".photo");

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1
        }
    );

    photos.forEach(function (photo) {
        observer.observe(photo);
    });
});
