import React, { useState } from 'react';
import '../index.css';

const Button = () => {

    const [fondo, setFondo] = useState('https://www.xtrafondos.com/wallpapers/resized/lente-abstracto-4567.jpg?s=large');
    const [contador, setContador] = useState(0);

    const cambioFondo = (nuevoFondo) => {
        setFondo(nuevoFondo);
    }

    const Contar = () => {
        setContador(contador + 1);
    };
    
    return (
        <div className='wrapper'>
            <div className="container text-center rounded" style={{ backgroundImage: `url(${fondo})` }}>
                <div className='d-flex align-items-center justify-content-center h-100'>
                    <div className="row align-items-start">
                        <h2 className='text-light'>Cambio de Fondo</h2>
                        <div className="col">
                            <button className="btn btn-dark" onClick={() => { cambioFondo("https://www.xtrafondos.com/wallpapers/resized/colores-vibrantes-5313.jpg?s=large"); alert("Fondo 1 seleccionado"); }}>
                                Fondo 1
                            </button>
                        </div>
                        <div className="col">
                            <button className="btn btn-dark" onClick={() => { cambioFondo("https://www.xtrafondos.com/wallpapers/resized/abstraccion-minimalismo-7887.jpg?s=large"); alert("Fondo 2 seleccionado"); }}>
                                Fondo 2
                            </button>
                        </div>
                        <div className="col">
                            <button className="btn btn-dark" onClick={() => { cambioFondo("https://www.xtrafondos.com/wallpapers/resized/celdas-moradas-y-azules-5479.jpg?s=large"); alert("Fondo 3 seleccionado"); }}>
                                Fondo 3
                            </button>
                        </div>
                        <br /><br />
                        <div className='d-flex flex-column align-items-center text-light'>
                            <h2>Contador de clics: {contador}</h2>
                            <button className="btn btn-dark" onClick={Contar}>Haz clic aquí</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Button