package com.generation.burguer.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.generation.burguer.model.Producto;
import com.generation.burguer.model.dtoProducto;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long>{

	List<Producto> findByNombre(String nombre);
	@Query("SELECT new com.generation.burguer.model.dtoProducto (p.id , p.nombre, p.descripcion, p.precio, p.imagen, c.cate_id, c.cate_nombre) FROM Producto as p INNER JOIN p.cate_id c WHERE p.prod_id = c.id")
	Optional<dtoProducto> findByTables();
    @Query ("SELECT new com.generation.burguer.model.dtoProducto (p.id , p.nombre, p.descripcion, p.precio, p.imagen, c.cate_id, c.cate_nombre) FROM Producto as p INNER JOIN p.cate_id c WHERE p.prod_id = :IdProducto")
    Optional<dtoProducto> findByData (@Param("IdProducto") Long IdProducto);
    
}