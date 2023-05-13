package com.generation.burguer.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.generation.burguer.model.Producto;
import com.generation.burguer.repository.ProductoRepository;


@Service
public class ProductoService {
	private final ProductoRepository productoRepository;
	@Autowired
	public ProductoService(ProductoRepository productoRepository) {
		super();
		this.productoRepository = productoRepository;
	}
	public List<Producto> getAllProductos() {
		
		return productoRepository.findAll();
	}

	public Producto getProducto(Long id) {
		return productoRepository.findById(id).orElseThrow(
				()-> new IllegalArgumentException("Producto con id "
							+ id + "no existe.")
				);
	}

	public Producto deleteProducto(Long id) {
		Producto prodTmp = null;
		if(productoRepository.existsById(id)) {
			prodTmp=productoRepository.findById(id).get();
			productoRepository.deleteById(id);
		}
		return prodTmp;
	}
public Producto addProducto(Producto producto) {
	Producto tmp =null;
	if(productoRepository.findByNombre(producto.getNombre()).isEmpty()){
		tmp = productoRepository.save(producto);
	}//if
		return tmp;
		}
public Producto updateProducto(Long id, Producto producto) {
    Producto tmpPro = null;
    if(productoRepository.existsById(id)) {
        tmpPro = productoRepository.findById(id).get();
            if(producto.getNombre() != null) tmpPro.setNombre(producto.getNombre());
            if(producto.getDescripcion() != null) tmpPro.setDescripcion(producto.getDescripcion());
            if(producto.getImagen() != null) tmpPro.setImagen(producto.getImagen());
            if (producto.getPrecio() != 0.0) tmpPro.setPrecio(producto.getPrecio());//Se pone 0.0 porque al ser Double marcaba error con 1=null
        
            productoRepository.save(tmpPro);
        }else {
            System.out.println("El producto con el id: " + id + " No existe");
        }
    return tmpPro;
}
}
