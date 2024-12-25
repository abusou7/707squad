const links = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('.section');

// Add event listener to each link
links.forEach(link => {
    link.addEventListener('click', () => {
        // Remove 'active' class from all links
        links.forEach(l => l.classList.remove('active'));

        // Add 'active' class to the clicked link
        link.classList.add('active');

        // Hide all sections
        sections.forEach(section => section.classList.remove('active'));

        // Show the targeted section
        const target = link.getAttribute('data-target');
        document.getElementById(target).classList.add('active');
    });
});

emailjs.init('yURl2NI4q_au1DHvE'); // استبدل YOUR_USER_ID بالقيمة الصحيحة

const form = document.querySelector('#apply form');
const notification = document.getElementById('notification');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // منع إعادة تحميل الصفحة

    const data = {
        to_name: '707 Squad',
        from_name: document.getElementById('fullname').value,
        message: `
            العمر: ${document.getElementById('age').value}
            الخبرات السابقة: ${document.getElementById('experience').value}
            المهارات: ${document.getElementById('skills').value}
            سبب التقديم: ${document.getElementById('reason').value}
        `
    };

    emailjs.send('blackpanther707squad', '707squad', data)
        .then(() => {
            // عرض الإشعار
            notification.classList.remove('hidden');

            // إخفاء الإشعار بعد 5 ثوانٍ
            setTimeout(() => {
                notification.classList.add('hidden');
            }, 5000);

            // إعادة تعيين الحقول
            form.reset();
        })
        .catch(err => {
            console.error('حدث خطأ أثناء الإرسال:', err);
            alert('حدث خطأ أثناء الإرسال. يرجى المحاولة لاحقًا.');
        });
});
