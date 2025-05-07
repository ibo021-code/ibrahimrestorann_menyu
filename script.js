document.addEventListener('DOMContentLoaded', () => {
    // Menyu kateqoriyalarını idarə etmək
    const buttons = document.querySelectorAll('.category-nav__button');
    const categories = document.querySelectorAll('.menu__category');

    const showCategory = (categoryId) => {
        categories.forEach(category => {
            category.classList.remove('active');
            if (category.id === categoryId) {
                category.classList.add('active');
            }
        });

        buttons.forEach(button => {
            button.classList.remove('active');
            if (button.dataset.category === categoryId) {
                button.classList.add('active');
            }
        });
    };

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const categoryId = button.dataset.category;
            showCategory(categoryId);
        });
    });

    // İlkin olaraq "İçkilər" kateqoriyasını göstər
    showCategory('ickiler');

    // QR kod yaratma
    const qrCodeDiv = document.getElementById('qrcode');
    const menuUrl = 'https://ibrahimrestoran.example.com'; // Real URL-i buraya daxil et

    new QRCode(qrCodeDiv, {
        text: menuUrl,
        width: 200,
        height: 200,
        colorDark: '#2c3e50', // QR kod rəngi (primary-dark)
        colorLight: '#ffffff', // Arxa fon rəngi
        correctLevel: QRCode.CorrectLevel.H // Yüksək səhv düzəltmə səviyyəsi
    });
});