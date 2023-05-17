(function () {
    "use strict";
    document.addEventListener("DOMContentLoaded", function() {
        flatpickr("#eventDate", {
            dateFormat: "d.m.Y",
            locale: "ru"
        });
    });

    $(document).ready(function() {
        $('#phoneInput').inputmask('+7 (999) 999-9999');
    });
}
)();