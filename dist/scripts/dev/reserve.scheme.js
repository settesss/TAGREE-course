(function () {
    "use strict";

    const checkboxes = document.querySelectorAll("input[type='checkbox']");

    // Получаем элементы количества билетов и общей стоимости
    const ticketQuantities = document.querySelectorAll('.reserve__tickets .reserve__qty');
    const ticketSums = document.querySelectorAll('.reserve__tickets .reserve__sum');
    const totalSum = document.querySelector('.reserve__total');

    // Устанавливаем начальные значения
    let quantitySum = 0;
    let total = 0;


    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener("change", function () {
            const table = document.querySelector(`.scene__table--${index + 1}`);
            const rect = table.querySelector("rect");
            const circles = table.querySelectorAll("circle");
            const tableNum = document.querySelector(`.table__num-${index + 1}`);
            const path = table.querySelector("path");

            if (this.checked) {
                if ([1, 4, 7, 8, 9].includes(index + 1)) {
                    rect.setAttribute("fill", "#BC3324");
                    circles.forEach((circle) => {
                        circle.setAttribute("fill", "#BC3324");
                    });
                    tableNum.style.fill = "#DEDEDE";
                } else if (index + 1 === 10) {
                    path.setAttribute("fill", "#1F1E1E");
                    circles.forEach((circle) => {
                        circle.setAttribute("fill", "#1F1E1E");
                    });
                    tableNum.style.fill = "#DEDEDE";
                } else {
                    rect.setAttribute("fill", "#1F1E1E");
                    circles.forEach((circle) => {
                        circle.setAttribute("fill", "#1F1E1E");
                    });
                    tableNum.style.fill = "#DEDEDE";
                }
            } else {
                if ([1, 4, 7, 8, 9].includes(index + 1)) {
                    rect.setAttribute("fill", "transparent");
                    circles.forEach((circle) => {
                        circle.setAttribute("fill", "transparent");
                    });
                    tableNum.style.fill = "#BC3324";
                } else if (index + 1 === 10) {
                    path.setAttribute("fill", "transparent");
                    circles.forEach((circle) => {
                        circle.setAttribute("fill", "transparent");
                    });
                    tableNum.style.fill = "#1F1E1E";
                } else {
                    rect.setAttribute("fill", "transparent");
                    circles.forEach((circle) => {
                        circle.setAttribute("fill", "transparent");
                    });
                    tableNum.style.fill = "#1F1E1E";
                }
            }
        });
    });

    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', () => {
          if (checkbox.checked) {
            if ([1, 4, 7, 8, 9].includes(index + 1)) {
                ticketQuantities[0].textContent = parseInt(ticketQuantities[0].textContent) + 1;
                ticketSums[0].textContent = parseInt(ticketSums[0].textContent) + 1400;
                quantitySum++;
                total += 1400;
            } else {
                ticketQuantities[1].textContent = parseInt(ticketQuantities[1].textContent) + 1;
                ticketSums[1].textContent = parseInt(ticketSums[1].textContent) + 1200;
                quantitySum++;
                total += 1200;
            }
          } else {
            if ([1, 4, 7, 8, 9].includes(index + 1)) {
                ticketQuantities[0].textContent = parseInt(ticketQuantities[0].textContent) - 1;
                ticketSums[0].textContent = parseInt(ticketSums[0].textContent) - 1400;
                total -= 1400;
            } else {
                ticketQuantities[1].textContent = parseInt(ticketQuantities[1].textContent) - 1;
                ticketSums[1].textContent = parseInt(ticketSums[1].textContent) - 1200;
                quantitySum--;
                total -= 1200;
            }
          }
          totalSum.textContent = total;
        });
      });
})();
