import { useState, useEffect } from 'react';
import '../css/gallery.css';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Datos de la galería - organizados por categoría
  const galleryItems = {
    '2D': [
      { id: 'aku-no', name: 'Aku No', type: 'image', file: 'aku_no.jpg' },
      { id: 'base-odilia', name: 'Base Odilia', type: 'image', file: 'base_odilia.png' },
      { id: 'cyberpunk', name: 'Cyberpunk', type: 'image', file: 'cyberpunk_2.png' },
      { id: 'desert', name: 'Desert', type: 'image', file: 'desert.png' },
      { id: 'dojo', name: 'Dojo', type: 'image', file: 'dojo.jpg' },
      { id: 'garza', name: 'Garza', type: 'image', file: 'garza.jpg' },
      { id: 'idle-big', name: 'Idle Big', type: 'gif', file: 'idle_big.gif' },
      { id: 'ladron-ninja', name: 'Ladrón Ninja', type: 'image', file: 'ladron_ninja.jpg' },
      { id: 'muro-chino', name: 'Muro Chino', type: 'image', file: 'muro_chino.jpg' },
      { id: 'ruda', name: 'Ruda', type: 'image', file: 'ruda.jpg' },
      { id: 'sapo-sake', name: 'Sapo Sake', type: 'image', file: 'sapo_sake.jpg' },
      { id: 'star-wars', name: 'Star Wars', type: 'image', file: 'star_wars.png' }
    ],
    '3D': [
      { id: 'bar-render', name: 'Bar Render', type: 'image', file: 'bar_render.jpg' },
      { id: 'bpr-render', name: 'BPR Render', type: 'image', file: 'BPR_Render.jpg' },
      { id: 'lampara-render', name: 'Lámpara Render', type: 'image', file: 'lampara_render.jpg' },
      { id: 'lampara-rueda', name: 'Lámpara Rueda', type: 'image', file: 'lampara_rueda_1080.jpg' },
      { id: 'lampara-techo', name: 'Lámpara Techo', type: 'image', file: 'lampara_techo.jpg' },
      { id: 'mesa-cosas', name: 'Mesa Cosas', type: 'image', file: 'mesa_cosas.jpg' },
      { id: 'pistola', name: 'Pistola', type: 'image', file: 'pistola.jpg' },
      { id: 'render2', name: 'Render 2', type: 'video', file: 'render2.mp4' },
      { id: 'render3', name: 'Render 3', type: 'video', file: 'render3.mp4' },
      { id: 'silla', name: 'Silla', type: 'image', file: 'silla.jpg' },
      { id: 'sombrero', name: 'Sombrero', type: 'image', file: 'sombrero_1080.jpg' },
      { id: 'vadrilo', name: 'Vadrilo', type: 'image', file: 'vadrilo.jpg' },
      { id: 'vela', name: 'Vela', type: 'image', file: 'vela.jpg' },
      { id: 'whisky', name: 'Whisky', type: 'image', file: 'whisky.jpg' },
      { id: 'zbrush-croco', name: 'ZBrush Croco', type: 'image', file: 'zbrush_croco.jpg' }
    ]
  };

  // Obtener todos los items filtrados
  const getFilteredItems = () => {
    if (selectedCategory === 'all') {
      return [...galleryItems['2D'], ...galleryItems['3D']];
    }
    return galleryItems[selectedCategory] || [];
  };

  const filteredItems = getFilteredItems();

  // Función para obtener la categoría de un item
const getItemCategory = (item) => {
  // Buscar por id en lugar de referencia de objeto
  const is2D = galleryItems['2D'].some(i => i.id === item.id);
  return is2D ? '2D' : '3D';
};

  // Función para obtener la ruta de una imagen
  const getImagePath = (item) => {
    const category = getItemCategory(item);
    return `/images/Gallery/${category}/${item.file}`;
  };

  // Manejar apertura del modal
  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedItem(filteredItems[index]);
    document.body.style.overflow = 'hidden';
  };

  // Manejar cierre del modal
  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };

  // Navegación del modal
  const goToPrevious = (e) => {
    e.stopPropagation();
    const newIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
    setCurrentIndex(newIndex);
    setSelectedItem(filteredItems[newIndex]);
  };

  const goToNext = (e) => {
    e.stopPropagation();
    const newIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setSelectedItem(filteredItems[newIndex]);
  };

  // Teclas para navegación
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedItem) return;
      if (e.key === 'ArrowLeft') goToPrevious(e);
      if (e.key === 'ArrowRight') goToNext(e);
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem, currentIndex]);

  // Renderizar item (con lazy loading)
  const renderItem = (item) => {
    const path = getImagePath(item);
    
    if (item.type === 'video') {
      return (
        <video className="gallery-media" autoPlay muted loop playsInline preload="metadata">
          <source src={path} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
    
    return <img src={path} alt={item.name} className="gallery-media" loading="lazy" />;
  };

  // Renderizar item en el modal
  const renderModalItem = (item) => {
    const path = getImagePath(item);
    
    if (item.type === 'video') {
      return (
        <video className="modal-media" controls autoPlay>
          <source src={path} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
    
    return <img src={path} alt={item.name} className="modal-media" />;
  };

  return (
    <div className="gallery-page">
      {/* Header */}
      <div className="gallery-header">
        <h1 className="gallery-title">
          <span className="title-accent">//</span> Art Gallery
        </h1>
        <p className="gallery-description">
          A showcase of <span className="highlight-text">2D and 3D artwork</span> created for 
          game prototypes, Master's exercises, and a board game project. 
          Understanding <span className="tech-highlight">art pipelines</span> — from 
          <span className="tech-highlight">2D concept art</span> to 
          <span className="tech-highlight">3D modeling and texturing</span> — is essential for 
          any game developer. These skills help me <span className="highlight-text">bridge the gap 
          between art and code</span>, ensuring that creative vision translates seamlessly into 
          Unity projects.
        </p>
      </div>

      {/* Filtros */}
      <div className="gallery-filters">
        <button 
          className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('all')}
        >
          All
        </button>
        <button 
          className={`filter-btn ${selectedCategory === '2D' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('2D')}
        >
           2D
        </button>
        <button 
          className={`filter-btn ${selectedCategory === '3D' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('3D')}
        >
           3D
        </button>
        <span className="filter-count">{filteredItems.length} items</span>
      </div>

      {/* Grid */}
      <div className="gallery-grid">
        {filteredItems.map((item, index) => (
          <div 
            key={item.id} 
            className="gallery-item"
            onClick={() => openModal(index)}
          >
            <div className="gallery-item-image">
              {renderItem(item)}
              <div className="gallery-item-overlay">
                <span className="item-name">{item.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>✕</button>
            <button className="modal-nav modal-prev" onClick={goToPrevious}>❮</button>
            <div className="modal-media-container">
              {renderModalItem(selectedItem)}
              <div className="modal-info">
                <span className="modal-name">{selectedItem.name}</span>
              </div>
            </div>
            <button className="modal-nav modal-next" onClick={goToNext}>❯</button>
            <div className="modal-counter">
              {currentIndex + 1} / {filteredItems.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;