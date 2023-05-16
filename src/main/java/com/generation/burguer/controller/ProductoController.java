package com.generation.burguer.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.generation.burguer.model.Producto;
import com.generation.burguer.model.dtoProducto;
import com.generation.burguer.service.ProductoService;

@RestController
@RequestMapping(path="/api/producto/")
public class ProductoController {
	private final ProductoService productoService;

    @Autowired
    public ProductoController(ProductoService productoService) {
        this.productoService = productoService;
    }

    @GetMapping
    public Optional<dtoProducto> getProductos(){
        return productoService.getAllProductos();
    }

    @GetMapping (path="{userId}")
    public dtoProducto getProducto(@PathVariable("userId") Long id) {
        return productoService.getProducto(id);
    }

    @DeleteMapping (path="{userId}")
    public Producto deleteProducto(@PathVariable("userId") Long id) {
        return productoService.deleteProducto(id);
    }

    @PostMapping
    public Producto addProducto(@RequestBody Producto producto) {
        return productoService.addProducto(producto);
    }

    //Data Transfer Object - DTO
    @PutMapping(path="{userId}")
    public Producto updateProducto(@PathVariable("userId") Long id,
                                @RequestBody Producto producto) {
        return productoService.updateProducto(id, producto);
    }



}
