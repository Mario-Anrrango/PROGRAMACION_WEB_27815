     // Simulación del archivo fenomenos.json
        const mockData = [
            { id: 1, title: "El Fantasma del Hotel Cecil", description: "Un caso de actividad poltergeist y apariciones recurrentes.", image: "./public/img/cards_img/hotel_cecil.avif", type: "Fantasma" },
            { id: 2, title: "Los Hombres de Negro", description: "Testimonios de figuras enigmáticas que silencian testigos de ovnis.", image: "./public/img/cards_img/hombres_de_negro.jpg", type: "Extraterrestre" },
            { id: 3, title: "Doppelgängers", description: "Un doble idéntico o casi idéntico a una persona que existe, pero con intenciones maliciosas.", image: "./public/img/cards_img/doppelgangers.jpeg", type: "Criatura" },
        ];

        const casesContainer = document.getElementById('cases-container');

        // Función de Fetch API simulada
        function fetchCases() {
            setTimeout(() => {
                try {
                    casesContainer.innerHTML = ''; 
                    
                    mockData.forEach(caseItem => {
                        // Usamos la estructura Card de Bootstrap y las clases personalizadas
                        const cardContainer = document.createElement('div');
                        cardContainer.className = 'col'; 
                        
                        cardContainer.innerHTML = `
                            <div class="card bg-custom-card h-100 rounded-3 shadow-lg border border-secondary border-opacity-10 transition duration-300 transform hover:shadow-danger">
                                <img src="${caseItem.image}" class="card-img-top w-100 object-fit-cover" style="height: 192px;" alt="${caseItem.title}" onerror="this.onerror=null;this.src='https://placehold.co/400x250/374151/FFFFFF?text=Caso+No+Encontrado';">
                                <div class="card-body p-4">
                                    <h5 class="card-title fs-5 fw-bold text-white mb-2">${caseItem.title}</h5>
                                    <p class="card-text text-secondary text-sm mb-3">${caseItem.description}</p>
                                    <span class="badge bg-danger bg-opacity-25 rounded-pill text-dark">${caseItem.type}</span>
                                    <a href="catalogo.html?id=${caseItem.id}" class="d-block mt-3 text-sm fw-medium text-custom-accent hover-text-danger">Leer Archivo Completo &rarr;</a>
                                </div>
                            </div>
                        `;
                        casesContainer.appendChild(cardContainer);
                    });

                } catch (error) {
                    casesContainer.innerHTML = `<p class="col-span-full text-center text-danger">Error al cargar los archivos: ${error.message}</p>`;
                }
            }, 1000); 
        }

        // --- CÓDIGO JS PARA MANEJAR EL HOVER DEL CARRUSEL ---
        
        // Función para aplicar los listeners a todos los items del carrusel
        function setupCarouselHover() {
            // Utilizamos el selector .carousel-item dentro del área de slides
            document.querySelectorAll('#carousel-inner-slides .carousel-item').forEach(item => {
                const originalCaption = item.querySelector('.original-caption');

                // Listener para cuando el puntero entra en el slide
                item.addEventListener('mouseenter', () => {
                    // Ocultar la barra de pie de página original de Bootstrap
                    if (originalCaption) {
                        originalCaption.classList.add('d-none');
                        // La clase d-md-block es la que hace visible el caption en pantallas grandes, la removemos.
                        originalCaption.classList.remove('d-md-block'); 
                    }
                });

                // Listener para cuando el puntero sale del slide
                item.addEventListener('mouseleave', () => {
                    // Restaurar la barra de pie de página original de Bootstrap
                    if (originalCaption) {
                        originalCaption.classList.remove('d-none');
                        // Restaurar la clase d-md-block para que vuelva a ser visible en pantallas medianas o superiores
                        originalCaption.classList.add('d-md-block'); 
                    }
                });
            });
        }

        // Llamar a la función al cargar la página
        fetchCases();

        // Asegurarse de que los listeners se apliquen después de que el DOM esté cargado
        document.addEventListener('DOMContentLoaded', setupCarouselHover);
        
        // También volvemos a aplicar los listeners en caso de que el carrusel cambie de slide
        const carouselElement = document.getElementById('featuredCarousel');
        if (carouselElement) {
             carouselElement.addEventListener('slid.bs.carousel', setupCarouselHover);
        }

document.addEventListener('DOMContentLoaded', initializeIndexPage);