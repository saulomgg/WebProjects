document.addEventListener('DOMContentLoaded', () => {

    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {

            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.dataset.category;

            document.querySelectorAll('.code-column').forEach(col => {
                col.style.display =
                    (category === 'all' || col.classList.contains(`category-${category}`))
                    ? 'flex'
                    : 'none';
            });

        });
    });

});