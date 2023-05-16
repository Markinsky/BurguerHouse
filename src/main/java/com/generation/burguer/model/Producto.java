package com.generation.burguer.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

	@Entity
	@Table(name="producto")
	public class Producto {
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "prod_id", unique = true, nullable = false)
		 private Long id;
		
		 @Column(name = "prod_nom", nullable = false)
		 private String nombre;
		 
		 @Column(name = "prod_des", nullable = false)
		 private String descripcion;
		 
		 @Column(name = "prod_pre", nullable = false)
		 private double precio;
		 
		 @Column(name = "prod_img", nullable = false)
		 private String imagen;
		 
		 @ManyToOne
		    @JoinColumn(name = "cate_id", nullable = false)
		    private Categoria Categoria;

public Producto(Long id, String nombre, String descripcion, double precio, String imagen,
				com.generation.burguer.model.Categoria categoria) {
			super();
			this.id = id;
			this.nombre = nombre;
			this.descripcion = descripcion;
			this.precio = precio;
			this.imagen = imagen;
			Categoria = categoria;
		}

public Producto() {
	// TODO Auto-generated constructor stub
}

public Categoria getCategoria() {
	return Categoria;
}

public void setCategoria(Categoria categoria) {
	Categoria = categoria;
}

public Long getId() {
	return id;
}

public void setId(Long id) {
	this.id = id;
}

public String getNombre() {
	return nombre;
}

public void setNombre(String nombre) {
	this.nombre = nombre;
}

public String getDescripcion() {
	return descripcion;
}

public void setDescripcion(String descripcion) {
	this.descripcion = descripcion;
}

public double getPrecio() {
	return precio;
}

public void setPrecio(double precio) {
	this.precio = precio;
}

public String getImagen() {
	return imagen;
}

public void setImagen(String imagen) {
	this.imagen = imagen;
}

@Override
public String toString() {
	return "Producto [id=" + id + ", nombre=" + nombre + ", descripcion=" + descripcion + ", precio=" + precio
			+ ", imagen=" + imagen + "]";
}

 
}
