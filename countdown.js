 // 目标日期（10/29）
 const targetDate = new Date('2024-01-20T00:09:00').getTime();

 function updateCountdown() {
     const currentDate = new Date().getTime();
     const timeRemaining = targetDate - currentDate;

     if (timeRemaining <= 0) {
         document.getElementById('countdown').innerHTML = "已到达指定日期！";
     } else {
         const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
         const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
         const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

         // 更新倒计时中的数字和样式
         document.getElementById('days').textContent = days;
         document.getElementById('hours').textContent = hours;
         document.getElementById('minutes').textContent = minutes;
         document.getElementById('seconds').textContent = seconds;
     }
 }

 updateCountdown(); // 初始更新

 // 每秒更新一次倒计时
 const countdownInterval = setInterval(updateCountdown, 1000);