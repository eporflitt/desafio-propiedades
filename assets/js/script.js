// Arreglos de propiedades
const propiedades_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        imagen: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial.',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        banos: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        imagen: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas.',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        banos: 1,
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        imagen: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares.',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        banos: 3,
        costo: 4500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento en la ciudad con terraza',
        imagen: 'https://images.unsplash.com/photo-1560184897-6dc39b6a51a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&q=80&w=700',
        descripcion: 'Amplio apartamento con terraza en el corazón de la ciudad.',
        ubicacion: '101 City Blvd, Downtown, NY 10001',
        habitaciones: 3,
        banos: 2,
        costo: 2500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Estudio moderno en zona tranquila',
        imagen: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&q=80&w=700',
        descripcion: 'Moderno estudio, ideal para profesionales, ubicado en una zona residencial tranquila.',
        ubicacion: '456 Quiet Street, Suburbia, CA 12345',
        habitaciones: 1,
        banos: 1,
        costo: 1200,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Casa de campo con piscina',
        imagen: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&q=80&w=700',
        descripcion: 'Casa de campo con piscina privada y amplio jardín.',
        ubicacion: '123 Country Road, Countryside, FL 98765',
        habitaciones: 4,
        banos: 3,
        costo: 3000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Departamento céntrico con vistas',
        imagen: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&q=80&w=700',
        descripcion: 'Departamento de 2 habitaciones con impresionantes vistas al centro de la ciudad.',
        ubicacion: '890 View Street, Downtown, TX 54321',
        habitaciones: 2,
        banos: 2,
        costo: 2000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento en el paseo marítimo',
        imagen: 'https://images.unsplash.com/photo-1542317854-4c76b6d93766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&q=80&w=700',
        descripcion: 'Acogedor apartamento en el paseo marítimo, con acceso directo a la playa.',
        ubicacion: '789 Beach Drive, Seaside Town, CA 65432',
        habitaciones: 3,
        banos: 2,
        costo: 2800,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Casa en las colinas',
        imagen: 'https://images.unsplash.com/photo-1569124589356-df936b6aa9f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&q=80&w=700',
        descripcion: 'Hermosa casa ubicada en las colinas, rodeada de naturaleza y tranquilidad.',
        ubicacion: '123 Hill Road, Green Hills, OR 56789',
        habitaciones: 4,
        banos: 3,
        costo: 3500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Departamento luminoso en la playa',
        imagen: 'https://images.unsplash.com/photo-1542317854-4c76b6d93766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&q=80&w=700',
        descripcion: 'Departamento amplio y luminoso en la playa, con impresionantes vistas al mar.',
        ubicacion: '456 Ocean Avenue, Beachside, FL 12345',
        habitaciones: 3,
        banos: 2,
        costo: 2700,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Chalet moderno en la montaña',
        imagen: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&q=80&w=700',
        descripcion: 'Chalet moderno ubicado en la montaña, ideal para los amantes del esquí.',
        ubicacion: '789 Mountain Drive, Snowtown, CO 23456',
        habitaciones: 5,
        banos: 4,
        costo: 4200,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Apartamento con balcón en la ciudad',
        imagen: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&q=80&w=700',
        descripcion: 'Elegante apartamento con balcón en el centro de la ciudad.',
        ubicacion: '123 Urban Road, Cityville, NY 56789',
        habitaciones: 2,
        banos: 2,
        costo: 2300,
        smoke: false,
        pets: true
    }
];

const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        imagen: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        banos: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        imagen: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar.',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        banos: 3,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        imagen: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        banos: 2,
        costo: 2200,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Casa de campo acogedora',
        imagen: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&q=80&w=700',
        descripcion: 'Hermosa casa de campo rodeada de naturaleza. Ideal para descansar.',
        ubicacion: '456 Rural Road, Countryside, CA 78901',
        habitaciones: 3,
        banos: 2,
        costo: 1500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse con vista al mar',
        imagen: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&q=80&w=700',
        descripcion: 'Penthouse de lujo con impresionantes vistas al océano.',
        ubicacion: '789 Ocean Drive, Seaside City, CA 67890',
        habitaciones: 4,
        banos: 3,
        costo: 5500,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento en la montaña',
        imagen: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&q=80&w=700',
        descripcion: 'Acogedor apartamento con vistas a la montaña, perfecto para esquiadores.',
        ubicacion: '345 Mountain Peak Road, Highlands, CO 34567',
        habitaciones: 2,
        banos: 1,
        costo: 1800,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Casa moderna en el bosque',
        imagen: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&q=80&w=700',
        descripcion: 'Casa moderna ubicada en un bosque tranquilo, ideal para escapadas de fin de semana.',
        ubicacion: '123 Forest Path, Woodland Town, OR 23456',
        habitaciones: 4,
        banos: 2,
        costo: 3200,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Loft en el centro histórico',
        imagen: 'https://images.unsplash.com/photo-1599423300746-b62533397364?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&q=80&w=700',
        descripcion: 'Loft con estilo industrial ubicado en el corazón del centro histórico.',
        ubicacion: '456 Old Town Avenue, Historical City, TX 65432',
        habitaciones: 1,
        banos: 1,
        costo: 1200,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Casa familiar con jardín',
        imagen: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&q=80&w=700',
        descripcion: 'Amplia casa familiar con un gran jardín y espacio para reuniones.',
        ubicacion: '789 Family Street, Suburbia, FL 87654',
        habitaciones: 5,
        banos: 3,
        costo: 4000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Departamento minimalista en la playa',
        imagen: 'https://images.unsplash.com/photo-1597002232765-e58f73f6a317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&q=80&w=700',
        descripcion: 'Departamento minimalista con acceso directo a la playa.',
        ubicacion: '123 Beachfront Blvd, Ocean City, CA 12345',
        habitaciones: 2,
        banos: 1,
        costo: 2600,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Villa de lujo en la ciudad',
        imagen: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&q=80&w=700',
        descripcion: 'Villa de lujo con piscina privada y amplios jardines, ubicada en una zona exclusiva de la ciudad.',
        ubicacion: '567 Prestige Blvd, Highend City, NY 76543',
        habitaciones: 6,
        banos: 5,
        costo: 8000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Villa rústica en las montañas',
        imagen: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&q=80&w=700',
        descripcion: 'Villa rústica ubicada en las montañas, perfecta para una escapada tranquila.',
        ubicacion: '123 Mountain Path, Alpine Village, CO 23456',
        habitaciones: 5,
        banos: 4,
        costo: 4500,
        smoke: false,
        pets: true
    }
];
// Función para renderizar propiedades
function renderizarPropiedades(propiedades, idContenedor) {
    const contenedor = document.getElementById(idContenedor);
    contenedor.innerHTML = ''; // Limpiar contenido previo

    propiedades.forEach((propiedad) => {
        contenedor.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${propiedad.imagen}" class="card-img-top" alt="Imagen del departamento">
                <div class="card-body">
                    <h5 class="card-title">${propiedad.nombre}</h5>
                    <p class="card-text">${propiedad.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                    <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedad.banos} Baños</p>
                    <p><i class="fas fa-dollar-sign"></i> $${propiedad.costo}</p>
                    <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
                        <i class="fas ${propiedad.smoke ? 'fa-smoking' : 'fa-smoking-ban'}"></i> ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                    </p>
                    <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
                        <i class="fas ${propiedad.pets ? 'fa-paw' : 'fa-ban'}"></i> ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                    </p>
                </div>
            </div>
        </div>`;
    });
}

// Renderizar propiedades en index.html
window.onload = function() {
    // Renderiza 3 propiedades en venta y alquiler
    renderizarPropiedades(propiedades_venta.slice(0, 3), 'venta');
    renderizarPropiedades(propiedades_alquiler.slice(0, 3), 'alquiler');
};
